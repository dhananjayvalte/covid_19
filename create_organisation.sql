select create_db_user('covid', 'password');

INSERT into organisation (name, db_user, uuid, parent_organisation_id,media_directory)
values ('covid',
        'covid', '0f34a8f4-4278-11ea-b77f-2e728ce88125', null,'covid');
