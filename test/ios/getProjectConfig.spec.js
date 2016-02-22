jest.autoMockOff();

const getProjectConfig = require('../../src/config/ios').projectConfig;
const mockFs = require('mock-fs');
const projects = require('../fixtures/projects');

describe('ios::getProjectConfig', () => {
  const userConfig = {};

  it('should return an object with ios project configuration', () => {
    const folder = 'testDir/nested';

    expect(typeof getProjectConfig(folder, userConfig)).toBe('object');
  });

  it('should return `null` if ios project was not found', () => {
    const folder = 'testDir/empty';

    expect(getProjectConfig(folder, userConfig)).toBe(null);
  });
});
