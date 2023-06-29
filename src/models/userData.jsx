export class User {
  constructor(
    id,
    name,
    dailyActivity,
    averageSessionDuration,
    score,
    performance,
    nutrition
  ) {
    this.id = id;
    this.name = name;
    this.dailyActivity = dailyActivity;
    this.averageSessionDuration = averageSessionDuration;
    this.score = score;
    this.performance = performance;
    this.nutrition = nutrition;
  }
}

export class Day {
  constructor(day, weight, caloriesBurned) {
    this.day = day;
    this.weight = weight;
    this.caloriesBurned = caloriesBurned;
  }
}

export class Performance {
  constructor(intensity, speed, endurance, energy, cardio) {
    this.intensity = intensity;
    this.speed = speed;
    this.endurance = endurance;
    this.energy = energy;
    this.cardio = cardio;
  }
}

export class Nutrition {
  constructor(fats, carbs, kcal) {
    this.fats = fats;
    this.carbs = carbs;
    this.kcal = kcal;
  }
}
