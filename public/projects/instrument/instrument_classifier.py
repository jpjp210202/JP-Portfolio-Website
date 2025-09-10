import os
import numpy as np
import librosa
from tqdm import tqdm
from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.layers import GlobalAveragePooling1D
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense, Dropout, Input
from tensorflow.keras.callbacks import EarlyStopping
import matplotlib.pyplot as plt
import datetime
from tensorflow.keras.callbacks import TensorBoard
import tensorflow as tf
print("Devices:", tf.config.list_physical_devices())

#  Path to your dataset
DATASET_PATH = "data"
MAX_FILES_PER_CLASS = 400  # Adjust this based on available RAM

#  Time-delay embedding
def time_delay_embedding(signal, delay=1, dimension=3):
    n_vectors = len(signal) - (dimension - 1) * delay
    if n_vectors <= 0:
        raise ValueError("Signal too short for the given embedding parameters.")
    embedded = np.zeros((n_vectors, dimension))
    for i in range(dimension):
        embedded[:, i] = signal[i * delay : i * delay + n_vectors]
    return embedded

#  Load audio files and extract features
def load_data(path):
    X, y, labels = [], [], []
    class_names = sorted(os.listdir(path))

    print(f"Scanning directory: {path}")

    for idx, class_name in enumerate(class_names):
        class_path = os.path.join(path, class_name)
        if not os.path.isdir(class_path):
            continue

        print(f" Loading class: {class_name}")
        files = [f for f in os.listdir(class_path) if f.endswith('.wav')]
        total = min(len(files), MAX_FILES_PER_CLASS)

        for file in tqdm(files[:MAX_FILES_PER_CLASS], desc=f"  ▶ {class_name:<20} ({total} files)", unit="file"):
            file_path = os.path.join(class_path, file)
            try:
                signal, sr = librosa.load(file_path, sr=16000)
                signal = signal[:32000] if len(signal) >= 32000 else np.pad(signal, (0, max(0, 32000 - len(signal))))
                embedded = time_delay_embedding(signal, delay=1, dimension=3)
                X.append(embedded)
                y.append(idx)
            except Exception as e:
                print(f" Error loading {file}: {e}")

        labels.append(class_name)

    print(f" Loaded {len(X)} samples.")
    return np.array(X, dtype=np.float16), to_categorical(y), labels

#  Build the 1D CNN model
def build_model(input_shape, num_classes):
    model = Sequential([
        Input(shape=input_shape),
        Conv1D(32, 5, activation='relu'),
        MaxPooling1D(2),
        Dropout(0.2),
        Conv1D(64, 5, activation='relu'),
        MaxPooling1D(2),
        Dropout(0.2),
        GlobalAveragePooling1D(),
        Dense(128, activation='relu'),
        Dropout(0.2),
        Dense(num_classes, activation='softmax')
    ])
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model

#  Main
X, y, class_names = load_data(DATASET_PATH)
print(f"\n Data shape (samples, time, dims): {X.shape}")
print(f" Labels shape: {y.shape}")
print(f" Classes: {class_names}")

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, stratify=y)

model = build_model(input_shape=X.shape[1:], num_classes=len(class_names))
model.summary()

early_stop = EarlyStopping(
    monitor='val_loss', patience=5, restore_best_weights=True
)

log_dir = os.path.join("logs", datetime.datetime.now().strftime("%Y%m%d-%H%M%S"))
tensorboard_callback = TensorBoard(log_dir=log_dir, histogram_freq=1)

# Train
history = model.fit(
    X_train, y_train,
    validation_data=(X_val, y_val),
    epochs=30,
    batch_size=16,
    callbacks=[early_stop, tensorboard_callback]
)
val_loss, val_acc = model.evaluate(X_val, y_val)
print(" Evaluation done. Preparing to save model...")
print(f"Final Validation Accuracy: {val_acc:.4f}")
print("Accuracy check Above ! Evaluation done. Preparing to save model...")
# Save the trained model
try:
    os.makedirs("saved_model", exist_ok=True)
    model.save("saved_model/2.instrument_classifier_400-30")
    print(" Model training complete and saved to 'saved_model/instrument_classifier'")
except Exception as e:
    print(f" Error saving model: {e}")

plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Val Loss')
plt.title('Loss over Epochs')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'], label='Train Acc')
plt.plot(history.history['val_accuracy'], label='Val Acc')
plt.title('Accuracy over Epochs')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()

plt.tight_layout()
plt.show()

