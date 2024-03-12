CREATE TABLE Organizacao (
    OrganizacaoID SERIAL PRIMARY KEY,
    Nome VARCHAR(55) NOT NULL,
    Tipo VARCHAR(50) NOT NULL CHECK (Tipo IN ('Empresa', 'ONG')),
    CNPJ VARCHAR(20) UNIQUE NOT NULL,
    Telefone VARCHAR(20),
    Localidade VARCHAR(55),
    Endereco VARCHAR(25),
    Email VARCHAR(55) UNIQUE NOT NULL
);

CREATE TABLE Doacao (
    DoacaoID SERIAL PRIMARY KEY,
    EmpresaID INT REFERENCES Organizacao(OrganizacaoID),
    ONGID INT REFERENCES Organizacao(OrganizacaoID),
    DATA DATE NOT NULL,
    Descricao TEXT,
    Quantidade NUMERIC(10, 2) NOT NULL CHECK (Quantidade > 0),
    Status VARCHAR(50) NOT NULL
    CHECK (EmpresaID != ONGID)
    );

CREATE TABLE RankingDeGamificacao (
    EmpresaID INT PRIMARY KEY REFERENCES Organizacao(OrganizacaoID),
    Pontuacao INT NOT NULL CHECK (Pontuacao >= 0),
    PosicaoNoRanking INT NOT NULL CHECK (PosicaoNoRanking > 0)
);

INSERT INTO Organizacao (Nome, Tipo, CNPJ, Telefone, Localidade, Endereco, Email)
VALUES
    ('Empresa A', 'Empresa', '1234567890', '123456789', 'São Paulo', 'Rua 1', 'empresaA@example.com'),
    ('Empresa B', 'Empresa', '0987654321', '987654321', 'Rio de Janeiro', 'Rua 2', 'empresaB@example.com'),
    ('Empresa C', 'Empresa', '1357924680', '987654321', 'Curitiba', 'Rua 3', 'empresaC@example.com'),
    ('Empresa D', 'Empresa', '1010101010', '111111111', 'Belo Horizonte', 'Rua 6', 'empresaD@example.com'),
    ('Empresa E', 'Empresa', '2020202020', '222222222', 'Brasília', 'Rua 7', 'empresaE@example.com'),
    ('Empresa F', 'Empresa', '3030303030', '333333333', 'Recife', 'Rua 8', 'empresaF@example.com'),
    ('Empresa G', 'Empresa', '4040404040', '444444444', 'Manaus', 'Rua 9', 'empresaG@example.com'),
    ('Empresa H', 'Empresa', '5050505050', '555555555', 'Porto Alegre', 'Rua 10', 'empresaH@example.com'),
    ('Empresa I', 'Empresa', '1212121212', '111222333', 'Vitória', 'Rua 16', 'empresaI@example.com'),
    ('Empresa J', 'Empresa', '1313131313', '444555666', 'Cuiabá', 'Rua 17', 'empresaJ@example.com'),
    ('Empresa K', 'Empresa', '1414141414', '777888999', 'Teresina', 'Rua 18', 'empresaK@example.com'),
    ('Empresa L', 'Empresa', '1515151515', '123456789', 'João Pessoa', 'Rua 19', 'empresaL@example.com'),
    ('Empresa M', 'Empresa', '1616161616', '987654321', 'Porto Alegre', 'Rua 20', 'empresaM@example.com'),
    ('Empresa N', 'Empresa', '1717171717', '555666777', 'Florianópolis', 'Rua 21', 'empresaN@example.com'),
    ('Empresa O', 'Empresa', '1818181818', '888999000', 'Campo Grande', 'Rua 22', 'empresaO@example.com'),
    ('Empresa P', 'Empresa', '1919191919', '111222333', 'São Luís', 'Rua 23', 'empresaP@example.com'),
    ('Empresa Q', 'Empresa', '2122232020', '444555666', 'Maceió', 'Rua 24', 'empresaQ@example.com'),
    ('Empresa R', 'Empresa', '2121212121', '777888999', 'Belém', 'Rua 25', 'empresaR@example.com'),
    ('Empresa S', 'Empresa', '2222222222', '123456789', 'Natal', 'Rua 26', 'empresaS@example.com'),
    ('Empresa T', 'Empresa', '2323232323', '987654321', 'Boa Vista', 'Rua 27', 'empresaT@example.com'),
    ('Empresa U', 'Empresa', '2424242424', '555666777', 'Porto Velho', 'Rua 28', 'empresaU@example.com'),
    ('Empresa V', 'Empresa', '2525252525', '888999000', 'Palmas', 'Rua 29', 'empresaV@example.com'),
    ('Empresa W', 'Empresa', '2626262626', '111222333', 'Rio Branco', 'Rua 30', 'empresaW@example.com'),
    ------------- Ongs ---------------
    ('ONG X', 'ONG', '2468013579', '123456789', 'Salvador', 'Rua 4', 'ongX@example.com'),
    ('ONG Y', 'ONG', '5792468013', '987654321', 'Fortaleza', 'Rua 5', 'ongY@example.com'),
    ('ONG Z', 'ONG', '6060606060', '666666666', 'Belém', 'Rua 11', 'ongZ@example.com'),
    ('ONG W', 'ONG', '7070707070', '777777777', 'Florianópolis', 'Rua 12', 'ongW@example.com'),
    ('ONG V', 'ONG', '8080808080', '888888888', 'Natal', 'Rua 13', 'ongV@example.com'),
    ('ONG U', 'ONG', '9090909090', '999999999', 'Porto Velho', 'Rua 14', 'ongU@example.com'),
    ('ONG T', 'ONG', '1111111111', '101010101', 'Campo Grande', 'Rua 15', 'ongT@example.com'),
    ('ONG S', 'ONG', '3737171717', '111222333', 'São Luís', 'Rua 21', 'ongS@example.com'),
    ('ONG R', 'ONG', '3838181818', '444555666', 'Maceió', 'Rua 22', 'ongR@example.com'),
    ('ONG Q', 'ONG', '4949191919', '777888999', 'Goiânia', 'Rua 23', 'ongQ@example.com'),
    ('ONG P', 'ONG', '5152232425', '123456789', 'Aracaju', 'Rua 24', 'ongP@example.com'),
    ('ONG O', 'ONG', '6161212121', '987654321', 'Natal', 'Rua 25', 'ongO@example.com'),
    ('ONG N', 'ONG', '7272222222', '111222333', 'João Pessoa', 'Rua 26', 'ongN@example.com'),
    ('ONG M', 'ONG', '8383232323', '444555666', 'Recife', 'Rua 27', 'ongM@example.com'),
    ('ONG L', 'ONG', '9494242424', '777888999', 'Porto Alegre', 'Rua 28', 'ongL@example.com'),
    ('ONG K', 'ONG', '5555252525', '123456789', 'Salvador', 'Rua 29', 'ongK@example.com'),
    ('ONG J', 'ONG', '6666262626', '987654321', 'Fortaleza', 'Rua 30', 'ongJ@example.com'),
    ('ONG I', 'ONG', '7727277727', '111222333', 'Belém', 'Rua 31', 'ongI@example.com'),
    ('ONG H', 'ONG', '8828288828', '444555666', 'Florianópolis', 'Rua 32', 'ongH@example.com'),
    ('ONG G', 'ONG', '9909292929', '777888999', 'Natal', 'Rua 33', 'ongG@example.com');
    

INSERT INTO Doacao (EmpresaID, ONGID, Data, Descricao, Quantidade, Status)
VALUES 
    (1, 22, '2024-03-15', 'Doação de Carne', 25, 'Em andamento'),
    (2, 23, '2024-03-16', 'Doação de Arroz', 35, 'Concluída'),
    (3, 24, '2024-03-17', 'Doação de Feijão', 45, 'Em andamento'),
    (4, 25, '2024-03-18', 'Doação de Legumes', 55, 'Em andamento'),
    (5, 26, '2024-03-19', 'Doação de Frutas', 65, 'Em andamento'),
    (6, 27, '2024-03-20', 'Doação de Carne', 30, 'Concluída'),
    (7, 28, '2024-03-21', 'Doação de Arroz', 40, 'Em andamento'),
    (8, 29, '2024-03-22', 'Doação de Feijão', 50, 'Em andamento'),
    (9, 30, '2024-03-23', 'Doação de Legumes', 60, 'Em andamento'),
    (10, 31, '2024-03-24', 'Doação de Frutas', 70, 'Em andamento'),
    (11, 32, '2024-03-25', 'Doação de Carne', 35, 'Concluída'),
    (12, 33, '2024-03-26', 'Doação de Arroz', 45, 'Em andamento'),
    (13, 34, '2024-03-27', 'Doação de Feijão', 55, 'Em andamento'),
    (14, 35, '2024-03-28', 'Doação de Legumes', 65, 'Em andamento'),
    (15, 36, '2024-03-29', 'Doação de Frutas', 75, 'Em andamento'),
    (16, 37, '2024-03-30', 'Doação de Carne', 40, 'Concluída'),
    (17, 38, '2024-03-31', 'Doação de Arroz', 50, 'Em andamento'),
    (18, 39, '2024-04-01', 'Doação de Feijão', 60, 'Em andamento'),
    (19, 40, '2024-04-02', 'Doação de Legumes', 70, 'Em andamento'),
    (20, 41, '2024-04-03', 'Doação de Frutas', 80, 'Em andamento');



INSERT INTO RankingDeGamificacao 
(EmpresaID, Pontuacao, PosicaoNoRanking) 
VALUES 
(1,1000,1),
(2,980,2),
(3,950,3),
(4,900,4),
(5,880,5),
(6,800,6),
(7,780,7),
(8,730,8),
(9,720,9),
(10,610,10);

select * from Organizacao;
select * from Doacao;
select * from RankingDeGamificacao;

SELECT * FROM organizacao WHERE OrganizacaoID = 2

SELECT * FROM Organizacao WHERE Tipo = 'Empresa'
SELECT * FROM Organizacao WHERE Tipo = 'Empresa' ID 2;
SELECT * FROM Organizacao WHERE Tipo = 'Empresa' AND Nome = 'Empresa B';
SELECT * FROM Organizacao WHERE Tipo = 'Empresa' AND OrganizacaoID = 10;

SELECT * FROM Organizacao WHERE Tipo = 'ONG'
SELECT * FROM Organizacao WHERE Tipo = 'ONG' LIMIT 2;
SELECT * FROM Organizacao WHERE Tipo = 'ONG' AND Nome = 'ONG U';
SELECT * FROM Organizacao WHERE Tipo = 'ONG' AND OrganizacaoID = 25;

SELECT COUNT(*) AS NumeroEmpresas FROM Organizacao WHERE Tipo = 'Empresa';

SELECT COUNT(*) AS NumeroONGs FROM Organizacao WHERE Tipo = 'ONG';

SELECT * FROM Doacoes WHERE Status = 'Concluida';

SELECT 
    Empresa.Nome AS Nome_Empresa, 
    CASE 
        WHEN ONG.Tipo = 'ONG' THEN ONG.Nome
        ELSE 'ONG'
    END AS Nome_ONG, 
    Doacao.Data, 
    Doacao.Descricao, 
    Doacao.Quantidade, 
    Doacao.Status
FROM 
    Doacao
INNER JOIN 
    Organizacao AS Empresa ON Doacao.EmpresaID = Empresa.OrganizacaoID
INNER JOIN 
    Organizacao AS ONG ON Doacao.ONGID = ONG.OrganizacaoID;
