/**
* Represents a speedgolf score, which combines strokes and time into a single score
* Time and strokes are both converted to seconds (1 stroke = 60 seconds)
*/
class SpeedGolfScore {
  /**
   * @param {number} strokes - Number of strokes taken
   * @param {number} minutes - Minutes component of time taken
   * @param {number} seconds - Seconds component of time taken
   */
  constructor(strokes, minutes, seconds = 0) {
      // Store speedgolf score in seconds
      this.totalSeconds = (strokes * 60) + (minutes * 60) + seconds;
  }

  /**
   * Returns the score formatted as "minutes:seconds"
   * @returns {string} Score in MM:SS format
   */
  getScore() {
      const minutes = Math.floor(this.totalSeconds / 60);
      const seconds = this.totalSeconds % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

/**
* Decorator that adds penalty strokes to a speed golf score
* Each penalty stroke adds 60 seconds to the total
*/
class PenaltyDecorator {
  /**
   * @param {SpeedGolfScore} speedGolfScore - Base score to decorate
   * @param {number} penaltyStrokes - Number of penalty strokes to add
   */
  constructor(speedGolfScore, penaltyStrokes = 0) {
      this.wrappedScore = speedGolfScore;
      // Add penalty strokes converted to seconds
      this.totalSeconds = speedGolfScore.totalSeconds + (penaltyStrokes * 60);
  }

  /**
   * Returns the score with penalties, formatted as "minutes:seconds"
   * @returns {string} Score in MM:SS format
   */
  getScore() {
      const minutes = Math.floor(this.totalSeconds / 60);
      const seconds = this.totalSeconds % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

/**
* Decorator that applies a handicap reduction to a speed golf score
* Each handicap stroke subtracts 60 seconds from the total
*/
class HandicapDecorator {
  /**
   * @param {SpeedGolfScore} speedGolfScore - Base score to decorate
   * @param {number} handicap - Number of handicap strokes to subtract
   */
  constructor(speedGolfScore, handicap) {
      this.wrappedScore = speedGolfScore;
      // Subtract handicap strokes converted to seconds
      this.totalSeconds = speedGolfScore.totalSeconds - (handicap * 60);
  }

  /**
   * Returns the handicap-adjusted score formatted as "minutes:seconds"
   * @returns {string} Score in MM:SS format
   */
  getScore() {
      const minutes = Math.floor(this.totalSeconds / 60);
      const seconds = this.totalSeconds % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}