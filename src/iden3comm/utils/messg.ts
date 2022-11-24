import { BasicMessage, EnvelopeStub, HeaderStub } from '../types';

export const basicMessageFactory = (): BasicMessage => {
  return {
    id: '',
    typ: '',
    thid: '',
    type: '',
    body: {},
    from: '',
    to: ''
  };
};

export const envelopeStubFactory = (): EnvelopeStub => {
  return {
    protected: ''
  };
};

export const headerStubFactory = (): HeaderStub => {
  return {
    typ: ''
  };
};