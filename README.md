# 🗨️ Application de Chat en Temps Réel

# 🗨️ Application de Chat en Temps Réel

Bienvenue dans **l'application de chat en temps réel** ! Ce starter kit est conçu pour créer une application de chat en temps réel en utilisant **Socket.io** avec **Express** pour le backend et **MongoDB** pour le stockage des messages.

## 📦 Fonctionnalités

- **Communication en Temps Réel** avec `Socket.io`
- **Gestion des Utilisateurs** et **Salles de Chat**
- Historique des messages persistant avec `MongoDB`
- 🚀 Configuration rapide et facile à étendre

## 🛠️ Installation

Suivez ces étapes pour mettre en place l'application sur votre machine locale.

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/realtime-chat-app.git
cd realtime-chat-app
```

2. Installer les dépendances
```bash
npm install
```

3. Démarrer le serveur
```bash
npm run dev
```
Cela démarrera le serveur sur http://localhost:5000.

🗂️ Structure du Projet
```
/realtime-chat-app
├── server
│   ├── models
│   │   └── Message.js
│   ├── routes
│   │   └── chat.js
│   ├── server.js
│   └── socket.js
├── client
│   ├── index.html
│   ├── style.css
│   └── script.js
├── package.json
└── README.md
```
`server/` : Contient le code serveur, y compris les modèles, les routes et la logique des sockets.
`client/` : Contient les fichiers front-end tels que index.html, style.css, et script.js.

⚙️ Configuration
Si vous souhaitez modifier la chaîne de connexion MongoDB, modifiez directement la variable MONGO_URI dans `server/server.js` :
```javascript
const MONGO_URI = 'mongodb://localhost:27017/realtime-chat';
```

📄 Documentation API
Endpoints API
- GET `/api/chat/:room` : Récupère les messages pour une salle de chat spécifique.
- POST `/api/chat` : Envoie un nouveau message à une salle de chat.

📢 Remarques
- Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine.
- Le serveur écoute par défaut sur le port 5000. Vous pouvez le modifier en ajustant la variable PORT dans `server/server.js`.

📝 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Créé avec ❤️ par Merlin's Code

