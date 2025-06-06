import { describe, it, expect } from 'vitest';
import { 
  HeroError, 
  HeroNotFoundError, 
  InvalidHeroDataError, 
  UnauthorizedHeroAccessError 
} from './hero-errors';

describe('Hero Custom Errors', () => {
  describe('HeroNotFoundError', () => {
    it('should create an error with the correct message', () => {
      const error = new HeroNotFoundError('Spider-Man');
      expect(error.message).toBe("Hero with name 'Spider-Man' not found");
      expect(error.name).toBe('HeroNotFoundError');
    });
  });

  describe('InvalidHeroDataError', () => {
    it('should create an error with the correct message', () => {
      const error = new InvalidHeroDataError('Missing required fields');
      expect(error.message).toBe('Invalid hero data: Missing required fields');
      expect(error.name).toBe('InvalidHeroDataError');
    });
  });

  describe('UnauthorizedHeroAccessError', () => {
    it('should create an error with the correct message', () => {
      const error = new UnauthorizedHeroAccessError();
      expect(error.message).toBe('Unauthorized access to hero resource');
      expect(error.name).toBe('UnauthorizedHeroAccessError');
    });
  });

  describe('HeroError', () => {
    it('should create a base hero error', () => {
      const error = new HeroError('Generic hero error');
      expect(error.message).toBe('Generic hero error');
      expect(error.name).toBe('HeroError');
    });
  });
});