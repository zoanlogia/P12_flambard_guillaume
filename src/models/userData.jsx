// Model pour les données principales de l'utilisateur
class UserMainData {
  constructor(id, firstName, lastName, age, todayScore, keyData) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}

// Model pour l'activité de l'utilisateur
class UserActivity {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

// Model pour les sessions moyennes de l'utilisateur
class UserAverageSessions {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

// Model pour les performances de l'utilisateur
class UserPerformance {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}

export { UserMainData, UserActivity, UserAverageSessions, UserPerformance };
