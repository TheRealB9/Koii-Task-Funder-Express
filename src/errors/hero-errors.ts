/**
 * Custom error classes for hero-related operations
 */
export class HeroError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HeroError';
  }
}

/**
 * Represents an error when a hero is not found
 */
export class HeroNotFoundError extends HeroError {
  constructor(heroName: string) {
    super(`Hero with name '${heroName}' not found`);
    this.name = 'HeroNotFoundError';
  }
}

/**
 * Represents an error when invalid hero data is provided
 */
export class InvalidHeroDataError extends HeroError {
  constructor(reason: string) {
    super(`Invalid hero data: ${reason}`);
    this.name = 'InvalidHeroDataError';
  }
}

/**
 * Represents an error when a hero operation is unauthorized
 */
export class UnauthorizedHeroAccessError extends HeroError {
  constructor() {
    super('Unauthorized access to hero resource');
    this.name = 'UnauthorizedHeroAccessError';
  }
}