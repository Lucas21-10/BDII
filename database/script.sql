CREATE SEQUENCE IF NOT EXISTS usuarios_id_seq
START 1
INCREMENT 1;

DROP TABLE IF EXISTS contatos CASCADE;
DROP TABLE IF EXISTS produtos CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;

CREATE TABLE usuarios (
    id INTEGER NOT NULL DEFAULT nextval('usuarios_id_seq'),
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT usuarios_pkey PRIMARY KEY (id),
    CONSTRAINT usuarios_email_key UNIQUE (email)
);

ALTER SEQUENCE usuarios_id_seq
OWNED BY usuarios.id;

CREATE TABLE contatos (
    id INTEGER NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    mensagem TEXT NOT NULL,

    CONSTRAINT contatos_pkey PRIMARY KEY (id)
);

CREATE TABLE produtos (
    id INTEGER NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    categoria VARCHAR(50) NOT NULL,

    CONSTRAINT produtos_pkey PRIMARY KEY (id)
);

INSERT INTO usuarios
(id, nome, email, senha, criado_em)
VALUES
(
1,
'admin',
'admin@gmail.com',
'123456',
'2026-06-22 11:34:40.388828'
);

SELECT setval('usuarios_id_seq', 1, true);

INSERT INTO contatos
VALUES
(
1,
'Lucas',
'lucaston618@gmail.com',
'87 988628399',
'Palmeirina',
'Teste funcionando..'
);

INSERT INTO produtos
VALUES
(
1,
'Bolo Floral',
'Elegância distribuída em seus múltiplos andares. Bolo com detalhes de renda.',
'bolo-cas01.png',
'casamento'
),

(
2,
'Bolo Arranjo Floral',
'Bolo com arranjos florais de cores variadas e tons vibrantes.',
'bolo-cas02.png',
'casamento'
),

(
3,
'Bolo Orquídeas',
'Design clássico de vários andares e cachos de orquídeas brancas.',
'bolo-cas03.png',
'casamento'
),

(
4,
'Branca de Neve',
'Bolo temático sobre a Branca de Neve e os Sete Anões.',
'bolo-tem01.png',
'tematico'
),

(
5,
'Fundo do Mar',
'O fundo do mar emerge nos detalhes desse bolo temático.',
'bolo-tem02.png',
'tematico'
),

(
6,
'Bob Esponja',
'O Bob Esponja e sua turma diretamente da Fenda do Biquíni.',
'bolo-tem03.png',
'tematico'
),

(
7,
'Ovo Morango e Brigadeiro',
'Ovo de páscoa de colher: morango e brigadeiro.',
'ovo-p01.png',
'pascoa'
),

(
8,
'Ovo Farbegé',
'Ovo de páscoa inspirado nos famosos ovos Farbegé.',
'ovo-p02.png',
'pascoa'
),

(
9,
'Ovo Te Amo',
'Ovo de colher de brigadeiro branco, morangos e frase Te Amo.',
'ovo-p03.png',
'pascoa'
);

COMMIT;