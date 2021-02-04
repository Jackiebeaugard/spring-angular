INSERT INTO project (id, title, description, complete) VALUES (0, 'First Project', 'This is my first project, just testing some things out!', false);
INSERT INTO project (id, title, description, complete) VALUES (1, 'Second Project', 'A real project with real goals.', false);
INSERT INTO project (id, title, description, complete) VALUES (2, 'Third Project', 'I need to do some things and remember some stuff.', false);
INSERT INTO project (id, title, description, complete) VALUES (3, 'Fourth Project', 'Another day, another project', false);

INSERT INTO task (id, title, complete, project_id) VALUES (0, 'First Task', false, 0);
INSERT INTO task (id, title, complete, project_id) VALUES (1, 'Second Task', false, 0);
INSERT INTO task (id, title, complete, project_id) VALUES (2, 'Third Task', false, 0);
INSERT INTO task (id, title, complete, project_id) VALUES (3, 'This is a task', false, 1);