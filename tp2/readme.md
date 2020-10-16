# TP2

## Pages

- Page d’accueil doit être la page liste.
- Les pages liste et profil doivent être accessible via tabs ou side menu.
- La page détails est accessible en cliquant sur un item de la page liste.

## Fonctionnalités 

### Profil
*Tout les champs disponibles dans cette page doivent pouvoir être modifiés(IonInput ou IonAlert par exemple) simplement par l’utilisateur.* 

Les champssont les suivant:
- Nom
- Photo de profil (IonImg)
- Apport (€)
- Taux emprunt (%)
- Taux assurance (%)
- Durée de l’emprunt (années)
- Frais de notaire (%)

### Liste: 

*Cette page affiche la liste des appartement entré par l’utilisateur.*

Chaque itemest présenté sous la forme d’une IonCard avec les informations suivante:

- Photo (IonImg)
- Prix
- Rentabilité
- Date d'ajout
- Adresse
- Notes

Les cartes sont cliquables et permettent d’accéder au détail de l’appartement.

L’utilisateur devra pouvoir cliquer sur un bouton (IonFab) afin d’ajouter unnouvel appartement à la liste. Le clique déclenchera l’affichage du modalresponsable de l’ajout.

#### Ajout (IonModal)

Cette page permettra d’ajouter les informations suivantes:

- Adresse
- Prix
- Surface (m²)
- Prix de rénovation
- Loyer
- Temps de vacances (mois)
- Photos

*Grace à ces informations, les champs suivant seront calculés:*

- Prix au m² à l'achat
- Prix au m² à la location
- Prix par mois de l'emprunt
- Rentabilité
- Cash-flow

L’utilisateur pourra aussi supprimer cette appartement.

*par Usereau Lucas*
*et Foofouz Arthur*