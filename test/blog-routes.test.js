require('dotenv').config();
const superagent = require('superagent');
const PORT = process.env.PORT;
const SERVER_URL = 'http://localhost:' + PORT;
const server = require('../server');

jest.setTimeout(20000);

describe('Blog routes', () => {
  beforeAll(server.start);
  afterAll(server.stop);

  describe('Handle requests', () => {
    test(`sends 200 for GET requests`, done => {
      superagent
        .get(SERVER_URL + '/api/blogs')
        .end((err, res) => {
          expect(res.status).toBe(200);
          done();
        })
        .catch(err => {
          if (err) {
            console.log(err);
            done();
          }
        });
    });

    test('201 for PUT requests', done => {
      let post = {
        title: 'test',
        editorState: '<p>hello world</p>'
      }

      superagent
        .post(SERVER_URL + '/api/blog')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(post))
        .end((err, res) => {
          if (err) throw err;
          let postId = res.body._id;
          let updatedPost = {
            title: 'newish post'
          };
          superagent
            .put(SERVER_URL + '/api/blog/' + postId)
            .set('Content-Type', 'application/json')
            .send(updatedPost)
            .end((err, res) => {
              if (err) {
                expect(res.status).toBe(200);
                done();
              }
              expect(res.status).toBe(200);
              done();
            });
        });
    });
  });

