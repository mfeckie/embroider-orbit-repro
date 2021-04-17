import BucketClass from '@orbit/indexeddb-bucket';

export default {
  create(injections = {}) {
    injections.name = 'main';
    injections.namespace =
      'embroider-orbit-repro-main';
    return new BucketClass(injections);
  }
};
