export default function CameraPage() {
  return (
    <div className="camera-page">
      <h2>Interface Caméra</h2>
      <div className="camera-preview">
        {/* Placeholder pour le flux caméra */}
        <div className="camera-feed"></div>
        <div className="camera-controls">
          <button className="control-btn">Capture</button>
          <button className="control-btn">Paramètres</button>
        </div>
      </div>
    </div>
  );
}

