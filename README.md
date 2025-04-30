# QTRobot
+-----------------------------------------------------------------------------------------------------------------------------------+
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
|██████████████████████████████████████████████████████████ Initialisation █████████████████████████████████████████████████████████|
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
+-----------------------------------------------------------------------------------------------------------------------------------+
# La première fois, il est fortement conseillé de lancer ces commandes pour s'assurer que les packages nécessaires au bon fonctionnement sont correctement installés

• Afin d'installer tous les packages dépendants (cf. 'package.json', -> "dependencies")
  > npm i


+-----------------------------------------------------------------------------------------------------------------------------------+
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
|███████████████████████████████████████████████████████ Lancement du serveur ██████████████████████████████████████████████████████|
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
+-----------------------------------------------------------------------------------------------------------------------------------+
# Commandes disponibles pour lancer le serveur rapidement :

• Afin de lancer un serveur statique sur le port par défaut (8000)
  > npm run start

• Afin de lancer un serveur dynamique (qui se relance automatiquement à chaque modification) sur le port par défaut (8000)
  > npm run dev

• Pour lancer le serveur sur un port choisi, remplacer <port> avec le numéro souhaité
  # version statique
  > node server.js <port>
  # version dynamique
  > nodemon server.js <port>


+-----------------------------------------------------------------------------------------------------------------------------------+
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
|███████████████████████████████████████████████████████ Commandes GIT utiles ██████████████████████████████████████████████████████|
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
+-----------------------------------------------------------------------------------------------------------------------------------+
# Liste non-exhaustive et non détaillée des commandes GIT à utiliser dans un terminal (depuis un emplacement reconnu comme une GIT repository locale)

• Permet de cloner une repository GIT publique à un emplacement local de votre machine (remplacer <url> par le lien de partage).
Si vous êtes l'auteur de cette repository, cela se trouve dans "<> Code" -> "HTTP" -> "copy to clipboard"
  > git clone <url>

• Permet d'afficher la liste de toutes les branches
  # Affichage des branches locales uniquement
  > git branch
  # Affichage des branches locales et publiques
  > git branch --all

• Permet de changer de branche courante (remplacer <branchName> avec le nom d'une branche existante)
  > git switch <branchName>
  # variante pour créer une nouvelle branche (non-existante), puis la définir courante
  > git switch -c <branchName>

• Permet d'afficher le statut de la branche courante vis-à-vis du dernier commit en date (fichiers ajoutés/modifiés/supprimés, fichiers pris en compte pour le prochain commit ou non, etc...)
  > git status

• Permet d'ajouter un fichier en particulier pour le prochain commit (remplacer <file> par le nom du fichier)
  > git add <file>
  # variante pour ajouter tous les fichiers d'un seul coup
  > git add .

• Permet de commit les modifications sur votre branche localement (remplacer <message> par une petite description indiquant les modifications faite depuis le dernier commit)
  > git commit -m <message>

• Permet de push les commits de votre branche locale sur la repository GIT (remote) pour que les autres puisse avoir accès à vos modifications
  > git push

• Permet de mettre à jour la repository GIT (remote) pour voir les nouvelles modifications (= resync avec le dépôt GIT remote)
  > git fetch
  # si vous avez un doute
  > git fetch --all

• Permet de récupérer les modifications du dépôt GIT (remote) sur votre branche locale (/!\ RISQUES DE CONFLITS)
  > git pull


/!\ NE MAITRISANT PAS LES COMMANDES DE 'MERGE' ET AUTRES, JE PREFERE EVITER DE LES ABORDER ^^

+-----------------------------------------------------------------------------------------------------------------------------------+
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
|███████████████████████████████████████████████████████ Utiliser le site web ██████████████████████████████████████████████████████|
|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████|
+-----------------------------------------------------------------------------------------------------------------------------------+

Url du site : https://qty.onrender.com/

Comment l'utiliser : 

La première étape consiste à choisir une histoire en appuyant sur la liste déroulante se situant en haut de la page.

Ensuite il faut simplement appuyer sur le bouton play "▶" afin de lancer l'histoire. Le bouton pause "⏸" est la pour mettre pause mais si on veut remettre play il faut rappuyer sur le bouton play.

Le bouton restart comme son nom l'indique sert à recommencer l'histoire du début. 

Le texte s'affiche dans la pancarte au fur et à mesure de l'histoire. Il est possible d'utiliser la scroll-bar qui se situe sur le coté de la pancarte afin de lire la partie de l'histoire que l'on veut.