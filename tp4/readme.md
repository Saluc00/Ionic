# TP4 - AddCamera

## 1.Permettre l’ajout de photo dans le modal.
- Créer un component pour la partie photo
- Utiliser le plugin Camera pour faire apparaître une preview 
- Faire remonter la photo dans le modal

## 2.Dans le modal:
- Utiliser la photo en base64 remontée par le component pour sauvegarder la photo dans le filesystem et enregistrer le nom defichier dans le context dans le addHandler.
## 3.Dans le context provider
- Utiliser useEffect pour enregistrer les changements d’appartementsdans le Storage.
- Récupérer la liste des appartements depuis le Storage pour initialiserle context.

*Par Usereau Lucas*