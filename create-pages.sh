#!/bin/bash

# 📁 Dossier où les pages seront créées
PAGES_DIR="src/pages"

# 📄 Crée le dossier s'il n'existe pas
mkdir -p "$PAGES_DIR"

# 📦 Liste des pages (route + nom)
declare -A pages=(
  [modeling]="Modélisation"
  [sculpting]="Sculpture"
  [animation]="Animation"
  [rendering]="Rendu"
  [texturing]="Texturage"
  [rigging]="Rigging"
  [simulation]="Simulation"
  [editing]="Montage"
  [shading]="Ombrage"
  [compositing]="Compositing"
  [align-photos]="Aligner Photos"
  [build-mesh]="Construire Maillage"
  [build-texture]="Construire Texture"
  [export-model]="Exporter Modèle"
  [dense-cloud]="Nuage Dense"
  [scale-model]="Échelle Modèle"
  [import-cameras]="Importer Caméras"
  [undistort]="Corriger Distorsion"
  [process-photos]="Traiter Photos"
  [import]="Importer"
)

echo "🔧 Génération des pages dans $PAGES_DIR..."

# 🛠 Génération des fichiers
for route in "${!pages[@]}"; do
  label="${pages[$route]}"
  file_name="${route//-/_}.js"
  class_name="$(tr '-' ' ' <<< "$route" | sed -E 's/(^| )(\w)/\U\2/g' | tr -d ' ')Page"
  file_path="${PAGES_DIR}/${file_name}"

  cat > "$file_path" <<EOF
import React from 'react';

function $class_name() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Section $label</h2>
      <p>Bienvenue dans la section <strong>$label</strong>.</p>
    </div>
  );
}

export default $class_name;
EOF

  echo "✅ Page créée : $file_path"
done

echo "🎉 Toutes les pages sont prêtes dans '$PAGES_DIR'."
