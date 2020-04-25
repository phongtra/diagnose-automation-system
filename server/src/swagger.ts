export default {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'RapidAPI Proxy server',
    description: 'Contains route to connect to priad API with ease',
  },
  schemes: ['http'],
  host: 'localhost:3000',
  basePath: '/',
  paths: {
    '/symptoms': {
      get: {
        tags: ['rapidAPI proxy'],
        summary: 'List all symptoms',
        description: 'retrieve the symptoms id and name',
        responses: {
          '200': {
            description: 'user information',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Symptoms',
                },
              },
            },
          },
        },
      },
    },
    '/diagnosis': {
      get: {
        summary: 'get diagnosis based on id',
        tags: ['rapidAPI proxy'],
        description: 'provides id of symptoms, gender, and birth year',
        parameters: [
          {
            name: 'symptoms',
            in: 'query',
            description: 'symptoms ids',
            schema: { type: 'integer[]' },
          },
          {
            name: 'gender',
            in: 'query',
            description: 'male, female',
            schema: { type: 'string' },
          },
          {
            name: 'birthYear',
            in: 'query',
            description: '1988 or something',
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'diagnosis response',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/DiagnosisResponse',
                },
              },
            },
          },
        },
      },
    },
    '/issues': {
      get: {
        summary: 'show issues info',
        tags: ['rapidAPI proxy'],
        description: 'show issues info include treatment',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: 'issuse id found in diagnosis',
            schema: {
              type: 'string',
            },
            required: true,
          },
        ],
        responses: {
          '200': {
            description: 'token is valid, redirect to the client page',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/IssueInfo',
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Symptoms: {
        type: 'object',
        properties: {
          ID: {
            type: 'integer',
          },
          Name: {
            type: 'string',
          },
        },
      },
      IssueInfo: {
        type: 'object',
        properties: {
          Description: {
            type: 'string',
          },
          DescriptionShort: {
            type: 'string',
          },
          MedicalCondition: {
            type: 'string',
          },
          Name: {
            type: 'string',
          },
          PossibleSymptoms: {
            type: 'string',
          },
          ProfName: {
            type: 'string',
          },
          Synonyms: {
            type: 'string',
          },
          TreatmentDescription: {
            type: 'string',
          },
        },
      },
      DiagnosisResponse: {
        type: 'object',
        required: ['token', 'username', 'id', 'role'],
        properties: {
          Issues: {
            type: 'object',
            properties: {
              ID: {
                type: 'integer',
              },
              Name: {
                type: 'string',
              },
              ProfName: {
                type: 'string',
              },
              Icd: {
                type: 'string',
              },
              IcdName: {
                type: 'string',
              },
              Accuracy: {
                type: 'integer',
              },
            },
          },
          Specialisation: {
            type: 'object',
            properties: {
              ID: {
                type: 'integer',
              },
              Name: {
                type: 'string',
              },
              SpecialistID: {
                type: 'integer',
              },
            },
          },
        },
      },
    },
  },
};
