const DB = {
    CORSO: [
        {CORSOID:1,NOMECORSO:'Programmazione C#',DESCRIZIONE:'Introduzione alla programmazione con C# e .NET',CREDITI:6,DOCENTEID:6},
        {CORSOID:2,NOMECORSO:'Sviluppo Web con Blazor',DESCRIZIONE:'Creazione di applicazioni web interattive con Blazor WebAssembly',CREDITI:6,DOCENTEID:7},
        {CORSOID:3,NOMECORSO:'Database Relazionali',DESCRIZIONE:'Progettazione e interrogazione di database con SQL Server',CREDITI:6,DOCENTEID:8},
        {CORSOID:4,NOMECORSO:'HTML e CSS',DESCRIZIONE:'Fondamenti di markup e stile per il web',CREDITI:3,DOCENTEID:4},
        {CORSOID:5,NOMECORSO:'JavaScript Avanzato',DESCRIZIONE:'Tecniche moderne di sviluppo frontend con JavaScript',CREDITI:6,DOCENTEID:5},
        {CORSOID:6,NOMECORSO:'OOP e Design Patterns',DESCRIZIONE:'Principi di programmazione orientata agli oggetti e pattern architetturali',CREDITI:6,DOCENTEID:2},
        {CORSOID:7,NOMECORSO:'Entity Framework Core',DESCRIZIONE:'Accesso ai dati con EF Core in ambienti .NET',CREDITI:4,DOCENTEID:3},
        {CORSOID:8,NOMECORSO:'ASP.NET Core MVC',DESCRIZIONE:'Sviluppo di applicazioni web con ASP.NET Core MVC',CREDITI:6,DOCENTEID:4},
        {CORSOID:9,NOMECORSO:'Git e Controllo Versione',DESCRIZIONE:'Gestione del codice sorgente con Git e GitHub',CREDITI:3,DOCENTEID:5},
        {CORSOID:10,NOMECORSO:'Testing e Debugging',DESCRIZIONE:'Tecniche di test unitario e debugging in C#',CREDITI:4,DOCENTEID:2},
        {CORSOID:11,NOMECORSO:'Sicurezza Web',DESCRIZIONE:'Principi di sicurezza nelle applicazioni web',CREDITI:3,DOCENTEID:3},
        {CORSOID:12,NOMECORSO:'REST API con .NET',DESCRIZIONE:'Creazione e consumo di API RESTful con ASP.NET Core',CREDITI:5,DOCENTEID:4},
        {CORSOID:13,NOMECORSO:'UX/UI Design',DESCRIZIONE:'Progettazione dell\'esperienza utente e interfacce grafiche',CREDITI:3,DOCENTEID:5},
        {CORSOID:14,NOMECORSO:'Progetto Finale',DESCRIZIONE:'Sviluppo di un applicazione completa in team',CREDITI:6,DOCENTEID:1},
        {CORSOID:15,NOMECORSO:'Cloud Computing',DESCRIZIONE:'Introduzione ai servizi cloud con Azure',CREDITI:4,DOCENTEID:2}
    ],
    DIPARTIMENTO: [
        {DIPARTIMENTOID:1,NOMEDIPARTIMENTO:'Informatica',DESCRIZIONE:'Dipartimento di Informatica e Ingegneria',CAPODIPARTIMENTO:1},
        {DIPARTIMENTOID:2,NOMEDIPARTIMENTO:'Matematica',DESCRIZIONE:'Dipartimento di Matematica e Statistica',CAPODIPARTIMENTO:null},
        {DIPARTIMENTOID:3,NOMEDIPARTIMENTO:'Fisica',DESCRIZIONE:'Dipartimento di Fisica e Astronomia',CAPODIPARTIMENTO:null},
        {DIPARTIMENTOID:4,NOMEDIPARTIMENTO:'Chimica',DESCRIZIONE:'Dipartimento di Chimica e Biologia',CAPODIPARTIMENTO:null}
    ],
    ESAME: [
        {ESAMEID:1,CORSOID:1,TITOLO:'Esame Programmazione C#',DATAESAME:'2025-01-15',DURATA:120},
        {ESAMEID:2,CORSOID:2,TITOLO:'Esame Blazor',DATAESAME:'2025-01-16',DURATA:120},
        {ESAMEID:3,CORSOID:3,TITOLO:'Esame Database',DATAESAME:'2025-01-17',DURATA:180},
        {ESAMEID:4,CORSOID:4,TITOLO:'Esame HTML/CSS',DATAESAME:'2025-01-18',DURATA:90},
        {ESAMEID:5,CORSOID:5,TITOLO:'Esame JavaScript',DATAESAME:'2025-01-19',DURATA:120},
        {ESAMEID:6,CORSOID:6,TITOLO:'Esame OOP',DATAESAME:'2025-01-20',DURATA:150},
        {ESAMEID:7,CORSOID:7,TITOLO:'Esame Entity Framework',DATAESAME:'2025-01-21',DURATA:120},
        {ESAMEID:8,CORSOID:8,TITOLO:'Esame ASP.NET MVC',DATAESAME:'2025-01-22',DURATA:180},
        {ESAMEID:9,CORSOID:9,TITOLO:'Esame Git',DATAESAME:'2025-01-23',DURATA:60},
        {ESAMEID:10,CORSOID:10,TITOLO:'Esame Testing',DATAESAME:'2025-01-24',DURATA:120}
    ],
    LIBRO: [
        {LIBROID:1,TITOLO:'Programmazione C# Guida Completa',AUTORE:'Mario Rossi',ISBN:'978-88-123456-01',ANNO:2023,DIPARTIMENTOID:1},
        {LIBROID:2,TITOLO:'Database Design',AUTORE:'Anna Verdi',ISBN:'978-88-123456-02',ANNO:2022,DIPARTIMENTOID:1},
        {LIBROID:3,TITOLO:'Matematica Discreta',AUTORE:'Luca Bianchi',ISBN:'978-88-123456-03',ANNO:2021,DIPARTIMENTOID:2},
        {LIBROID:4,TITOLO:'Fisica Quantistica',AUTORE:'Sara Neri',ISBN:'978-88-123456-04',ANNO:2023,DIPARTIMENTOID:3},
        {LIBROID:5,TITOLO:'Chimica Organica',AUTORE:'Marco Gallo',ISBN:'978-88-123456-05',ANNO:2022,DIPARTIMENTOID:4},
        {LIBROID:6,TITOLO:'JavaScript Moderno',AUTORE:'Elena Costa',ISBN:'978-88-123456-06',ANNO:2023,DIPARTIMENTOID:1},
        {LIBROID:7,TITOLO:'Algoritmi e Strutture Dati',AUTORE:'Davide Ferrari',ISBN:'978-88-123456-07',ANNO:2021,DIPARTIMENTOID:1},
        {LIBROID:8,TITOLO:'Statistica Applicata',AUTORE:'Chiara Russo',ISBN:'978-88-123456-08',ANNO:2022,DIPARTIMENTOID:2},
        {LIBROID:9,TITOLO:'Elettromagnetismo',AUTORE:'Andrea Conti',ISBN:'978-88-123456-09',ANNO:2023,DIPARTIMENTOID:3},
        {LIBROID:10,TITOLO:'Biologia Molecolare',AUTORE:'Federica Mariani',ISBN:'978-88-123456-10',ANNO:2021,DIPARTIMENTOID:4}
    ],
    PRESTITO: [
        {PRESTITOID:1,STUDENTEID:1,LIBROID:1,DATAPRESTITO:'2024-10-01',DATARESTITUZIONE:'2024-10-15',RESTITUITO:1},
        {PRESTITOID:2,STUDENTEID:2,LIBROID:2,DATAPRESTITO:'2024-10-02',DATARESTITUZIONE:'2024-10-16',RESTITUITO:1},
        {PRESTITOID:3,STUDENTEID:3,LIBROID:3,DATAPRESTITO:'2024-10-03',DATARESTITUZIONE:'2024-10-17',RESTITUITO:1},
        {PRESTITOID:4,STUDENTEID:4,LIBROID:4,DATAPRESTITO:'2024-10-04',DATARESTITUZIONE:'2024-10-18',RESTITUITO:1},
        {PRESTITOID:5,STUDENTEID:5,LIBROID:5,DATAPRESTITO:'2024-10-05',DATARESTITUZIONE:'2024-10-19',RESTITUITO:1},
        {PRESTITOID:6,STUDENTEID:6,LIBROID:6,DATAPRESTITO:'2024-10-06',DATARESTITUZIONE:'2024-10-20',RESTITUITO:1},
        {PRESTITOID:7,STUDENTEID:7,LIBROID:7,DATAPRESTITO:'2024-10-07',DATARESTITUZIONE:'2024-10-21',RESTITUITO:1},
        {PRESTITOID:8,STUDENTEID:8,LIBROID:8,DATAPRESTITO:'2024-10-08',DATARESTITUZIONE:'2024-10-22',RESTITUITO:1},
        {PRESTITOID:9,STUDENTEID:9,LIBROID:9,DATAPRESTITO:'2024-10-09',DATARESTITUZIONE:'2024-10-23',RESTITUITO:1},
        {PRESTITOID:10,STUDENTEID:10,LIBROID:10,DATAPRESTITO:'2024-10-10',DATARESTITUZIONE:'2024-10-24',RESTITUITO:1},
        {PRESTITOID:11,STUDENTEID:11,LIBROID:1,DATAPRESTITO:'2024-10-11',DATARESTITUZIONE:null,RESTITUITO:0},
        {PRESTITOID:12,STUDENTEID:12,LIBROID:2,DATAPRESTITO:'2024-10-12',DATARESTITUZIONE:null,RESTITUITO:0},
        {PRESTITOID:13,STUDENTEID:13,LIBROID:3,DATAPRESTITO:'2024-10-13',DATARESTITUZIONE:null,RESTITUITO:0},
        {PRESTITOID:14,STUDENTEID:14,LIBROID:4,DATAPRESTITO:'2024-10-14',DATARESTITUZIONE:null,RESTITUITO:0},
        {PRESTITOID:15,STUDENTEID:15,LIBROID:5,DATAPRESTITO:'2024-10-15',DATARESTITUZIONE:null,RESTITUITO:0}
    ],
    CITY: [
        {ID:1,NAME:'Tokyo',COUNTRYCODE:'JPN',DISTRICT:'Tokyo',POPULATION:13929286},
        {ID:2,NAME:'Jakarta',COUNTRYCODE:'IDN',DISTRICT:'Jakarta Raya',POPULATION:9604900},
        {ID:3,NAME:'Seoul',COUNTRYCODE:'KOR',DISTRICT:'Seoul',POPULATION:9981619},
        {ID:4,NAME:'Shanghai',COUNTRYCODE:'CHN',DISTRICT:'Shanghai',POPULATION:22315474},
        {ID:5,NAME:'Mumbai',COUNTRYCODE:'IND',DISTRICT:'Maharashtra',POPULATION:10500000},
        {ID:1661,NAME:'Rotterdam',COUNTRYCODE:'NLD',DISTRICT:'Zuid-Holland',POPULATION:593321},
        {ID:6,NAME:'New York',COUNTRYCODE:'USA',DISTRICT:'New York',POPULATION:8008278},
        {ID:7,NAME:'Los Angeles',COUNTRYCODE:'USA',DISTRICT:'California',POPULATION:3694820},
        {ID:8,NAME:'Chicago',COUNTRYCODE:'USA',DISTRICT:'Illinois',POPULATION:2896016},
        {ID:9,NAME:'Houston',COUNTRYCODE:'USA',DISTRICT:'Texas',POPULATION:1953631},
        {ID:10,NAME:'Philadelphia',COUNTRYCODE:'USA',DISTRICT:'Pennsylvania',POPULATION:1517550}
    ],
    EMPLOYEE: [
        {ID:1,NAME:'John Doe',SALARY:3000,MONTHS:12,DEPARTMENT:'IT'},
        {ID:2,NAME:'Jane Smith',SALARY:2500,MONTHS:8,DEPARTMENT:'HR'},
        {ID:3,NAME:'Bob Johnson',SALARY:3500,MONTHS:15,DEPARTMENT:'IT'},
        {ID:4,NAME:'Alice Brown',SALARY:2200,MONTHS:6,DEPARTMENT:'Finance'},
        {ID:5,NAME:'Charlie Wilson',SALARY:2800,MONTHS:10,DEPARTMENT:'IT'}
    ],
    STUDENTS: [
        {ID:1,NAME:'Alice',MARKS:85},
        {ID:2,NAME:'Bob',MARKS:92},
        {ID:3,NAME:'Charlie',MARKS:78},
        {ID:4,NAME:'Diana',MARKS:88},
        {ID:5,NAME:'Eve',MARKS:95}
    ],
    ORDERS: [
        {ID:1,NAME:'Laptop',PRICE:1200,CURRENCY:'USD',QUANTITY:1},
        {ID:2,NAME:'Mouse',PRICE:25,CURRENCY:'USD',QUANTITY:2},
        {ID:3,NAME:'Keyboard',PRICE:80,CURRENCY:'USD',QUANTITY:1},
        {ID:4,NAME:'Monitor',PRICE:300,CURRENCY:'USD',QUANTITY:1},
        {ID:5,NAME:'Headphones',PRICE:150,CURRENCY:'USD',QUANTITY:1}
    ],
    STUDENTE: [
        {StudenteId:1,Nome:'Moussa',Cognome:'Salisou',DataNascita:'2000-05-15',Email:'moussa@example.com'},
        {StudenteId:2,Nome:'Anna',Cognome:'Rossi',DataNascita:'1999-03-22',Email:'anna@example.com'},
        {StudenteId:3,Nome:'Luca',Cognome:'Bianchi',DataNascita:'2001-07-10',Email:'luca@example.com'},
        {StudenteId:4,Nome:'Sara',Cognome:'Verdi',DataNascita:'2000-11-05',Email:'sara@example.com'},
        {StudenteId:5,Nome:'Marco',Cognome:'Neri',DataNascita:'1998-09-18',Email:'marco@example.com'}
    ],
    DOCENTE: [
        {DocenteId:1,Nome:'Prof. Mario',Cognome:'Rossi',Email:'mario.rossi@univ.it',DipartimentoId:1},
        {DocenteId:2,Nome:'Prof. Anna',Cognome:'Verdi',Email:'anna.verdi@univ.it',DipartimentoId:1},
        {DocenteId:3,Nome:'Prof. Luca',Cognome:'Bianchi',Email:'luca.bianchi@univ.it',DipartimentoId:2},
        {DocenteId:4,Nome:'Prof. Sara',Cognome:'Neri',Email:'sara.neri@univ.it',DipartimentoId:3},
        {DocenteId:5,Nome:'Prof. Marco',Cognome:'Gallo',Email:'marco.gallo@univ.it',DipartimentoId:4}
    ],
    ISCRIZIONE: [
        {IscrizioneId:1,StudenteId:1,CorsoId:3,DataIscrizione:'2024-09-01'},
        {IscrizioneId:2,StudenteId:2,CorsoId:1,DataIscrizione:'2024-09-02'},
        {IscrizioneId:3,StudenteId:3,CorsoId:2,DataIscrizione:'2024-09-03'},
        {IscrizioneId:4,StudenteId:4,CorsoId:4,DataIscrizione:'2024-09-04'},
        {IscrizioneId:5,StudenteId:5,CorsoId:5,DataIscrizione:'2024-09-05'}
    ],
    VOTO: [
        {VotoId:1,StudenteId:1,CorsoId:3,Voto:28,DataEsame:'2024-12-15'},
        {VotoId:2,StudenteId:2,CorsoId:1,Voto:25,DataEsame:'2024-12-16'},
        {VotoId:3,StudenteId:3,CorsoId:2,Voto:30,DataEsame:'2024-12-17'},
        {VotoId:4,StudenteId:4,CorsoId:4,Voto:26,DataEsame:'2024-12-18'},
        {VotoId:5,StudenteId:5,CorsoId:5,Voto:27,DataEsame:'2024-12-19'}
    ]
};

const challenges = [
    {id:1,title:"Seleziona Tutto",difficulty:"easy",desc:"Query tutti i dati da CITY",table:"CITY",score:10,correctQuery:"SELECT * FROM CITY"},
    {id:2,title:"Seleziona per ID",difficulty:"easy",desc:"Query la città con ID = 1661",table:"CITY",score:10,correctQuery:"SELECT * FROM CITY WHERE ID = 1661"},
    {id:3,title:"Città Giapponesi",difficulty:"easy",desc:"Query le città giapponesi (JPN)",table:"CITY",score:10,correctQuery:"SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN'"},
    {id:4,title:"Nomi delle Città",difficulty:"easy",desc:"Query solo i nomi delle città",table:"CITY",score:10,correctQuery:"SELECT NAME FROM CITY"},
    {id:5,title:"Alta Popolazione",difficulty:"easy",desc:"Città USA con popolazione > 100000",table:"CITY",score:10,correctQuery:"SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000"},
    {id:6,title:"Conta Città",difficulty:"easy",desc:"Conta il numero di città",table:"CITY",score:10,correctQuery:"SELECT COUNT(*) FROM CITY"},
    {id:7,title:"Popolazione Media",difficulty:"easy",desc:"Popolazione media delle città",table:"CITY",score:10,correctQuery:"SELECT AVG(POPULATION) FROM CITY"},
    {id:8,title:"Nomi Dipendenti",difficulty:"easy",desc:"Query i nomi di tutti i dipendenti",table:"EMPLOYEE",score:10,correctQuery:"SELECT NAME FROM EMPLOYEE"},
    {id:9,title:"Alti Salari",difficulty:"easy",desc:"Dipendenti con SALARY > 2000 e MONTHS < 10",table:"EMPLOYEE",score:10,correctQuery:"SELECT * FROM EMPLOYEE WHERE SALARY > 2000 AND MONTHS < 10"},
    {id:10,title:"Dipartimento IT",difficulty:"easy",desc:"Query dipendenti del dipartimento IT",table:"EMPLOYEE",score:10,correctQuery:"SELECT * FROM EMPLOYEE WHERE DEPARTMENT = 'IT'"},
    {id:11,title:"Studenti Migliori",difficulty:"easy",desc:"Studenti con MARKS >= 85",table:"STUDENTS",score:10,correctQuery:"SELECT * FROM STUDENTS WHERE MARKS >= 85"},
    {id:12,title:"Ordina per Nome",difficulty:"easy",desc:"Tutti gli studenti ordinati per nome",table:"STUDENTS",score:10,correctQuery:"SELECT * FROM STUDENTS ORDER BY NAME"},
    {id:13,title:"Conta Studenti",difficulty:"easy",desc:"Conta gli studenti",table:"STUDENTS",score:10,correctQuery:"SELECT COUNT(*) FROM STUDENTS"},
    {id:14,title:"Ordini Costosi",difficulty:"easy",desc:"Ordini con PRICE > 100",table:"ORDERS",score:10,correctQuery:"SELECT * FROM ORDERS WHERE PRICE > 100"},
    {id:15,title:"Ordini Laptop",difficulty:"easy",desc:"Query gli ordini di Laptop",table:"ORDERS",score:10,correctQuery:"SELECT * FROM ORDERS WHERE NAME = 'Laptop'"},

    // Scuola Database - Easy
    {id:16,title:"Tutti gli Studenti",difficulty:"easy",desc:"Query tutti i dati degli studenti",table:"STUDENTE",score:10,correctQuery:"SELECT * FROM STUDENTE"},
    {id:17,title:"Nomi Studenti",difficulty:"easy",desc:"Query solo nomi e cognomi degli studenti",table:"STUDENTE",score:10,correctQuery:"SELECT Nome, Cognome FROM STUDENTE"},
    {id:18,title:"Corsi Disponibili",difficulty:"easy",desc:"Query tutti i corsi disponibili",table:"CORSO",score:10,correctQuery:"SELECT * FROM CORSO"},
    {id:19,title:"Studenti Iscritti",difficulty:"easy",desc:"Query tutte le iscrizioni",table:"ISCRIZIONE",score:10,correctQuery:"SELECT * FROM ISCRIZIONE"},
    {id:20,title:"Voti Esami",difficulty:"easy",desc:"Query tutti i voti degli esami",table:"VOTO",score:10,correctQuery:"SELECT * FROM VOTO"},
    {id:21,title:"Docenti",difficulty:"easy",desc:"Query tutti i docenti",table:"DOCENTE",score:10,correctQuery:"SELECT * FROM DOCENTE"},
    {id:22,title:"Conta Studenti",difficulty:"easy",desc:"Conta il numero totale di studenti",table:"STUDENTE",score:10,correctQuery:"SELECT COUNT(*) FROM STUDENTE"},
    {id:23,title:"Conta Corsi",difficulty:"easy",desc:"Conta il numero totale di corsi",table:"CORSO",score:10,correctQuery:"SELECT COUNT(*) FROM CORSO"},
    {id:24,title:"Studente per ID",difficulty:"easy",desc:"Query lo studente con StudenteId = 1",table:"STUDENTE",score:10,correctQuery:"SELECT * FROM STUDENTE WHERE StudenteId = 1"},
    {id:25,title:"Corso per ID",difficulty:"easy",desc:"Query il corso con CorsoId = 3",table:"CORSO",score:10,correctQuery:"SELECT * FROM CORSO WHERE CorsoId = 3"},

    // Scuola Database - Medium
    {id:26,title:"Studenti Ordinati",difficulty:"medium",desc:"Studenti ordinati per cognome",table:"STUDENTE",score:20,correctQuery:"SELECT * FROM STUDENTE ORDER BY Cognome"},
    {id:27,title:"Corsi per Crediti",difficulty:"medium",desc:"Corsi ordinati per numero di crediti decrescente",table:"CORSO",score:20,correctQuery:"SELECT * FROM CORSO ORDER BY CREDITI DESC"},
    {id:28,title:"Voti Alti",difficulty:"medium",desc:"Voti >= 25",table:"VOTO",score:20,correctQuery:"SELECT * FROM VOTO WHERE Voto >= 25"},
    {id:29,title:"Corsi con Docente",difficulty:"medium",desc:"Corsi che hanno un docente assegnato",table:"CORSO",score:20,correctQuery:"SELECT * FROM CORSO WHERE DOCENTEID IS NOT NULL"},
    {id:30,title:"Iscrizioni Recenti",difficulty:"medium",desc:"Iscrizioni ordinate per data decrescente",table:"ISCRIZIONE",score:20,correctQuery:"SELECT * FROM ISCRIZIONE ORDER BY DataIscrizione DESC"},
    {id:31,title:"Voto Massimo",difficulty:"medium",desc:"Il voto più alto ottenuto",table:"VOTO",score:20,correctQuery:"SELECT MAX(Voto) FROM VOTO"},
    {id:32,title:"Voto Minimo",difficulty:"medium",desc:"Il voto più basso ottenuto",table:"VOTO",score:20,correctQuery:"SELECT MIN(Voto) FROM VOTO"},
    {id:33,title:"Media Voti",difficulty:"medium",desc:"Media dei voti degli esami",table:"VOTO",score:20,correctQuery:"SELECT AVG(Voto) FROM VOTO"},
    {id:34,title:"Studenti per Corso",difficulty:"medium",desc:"Studenti iscritti al corso 'Database Relazionali'",table:"STUDENTE",score:25,correctQuery:"SELECT S.* FROM STUDENTE S JOIN ISCRIZIONE I ON S.StudenteId = I.StudenteId JOIN CORSO C ON I.CorsoId = C.CorsoId WHERE C.NOMECORSO = 'Database Relazionali'"},
    {id:35,title:"Corsi per Studente",difficulty:"medium",desc:"Corsi frequentati dallo studente 'Moussa Salisou'",table:"CORSO",score:25,correctQuery:"SELECT C.* FROM CORSO C JOIN ISCRIZIONE I ON C.CorsoId = I.CorsoId JOIN STUDENTE S ON I.StudenteId = S.StudenteId WHERE S.Nome = 'Moussa' AND S.Cognome = 'Salisou'"},
    {id:36,title:"Voti per Corso",difficulty:"medium",desc:"Voti del corso 'Programmazione C#'",table:"VOTO",score:25,correctQuery:"SELECT V.* FROM VOTO V JOIN CORSO C ON V.CorsoId = C.CorsoId WHERE C.NOMECORSO = 'Programmazione C#'"},
    {id:37,title:"Docente per Corso",difficulty:"medium",desc:"Docente del corso 'Database Relazionali'",table:"DOCENTE",score:25,correctQuery:"SELECT D.* FROM DOCENTE D JOIN CORSO C ON D.DocenteId = C.DOCENTEID WHERE C.NOMECORSO = 'Database Relazionali'"},

    // Scuola Database - Hard
    {id:38,title:"Top 5 Voti",difficulty:"hard",desc:"I 5 voti più alti",table:"VOTO",score:30,correctQuery:"SELECT TOP 5 * FROM VOTO ORDER BY Voto DESC"},
    {id:39,title:"Studenti con Voti Bassi",difficulty:"hard",desc:"Studenti con voti < 20",table:"STUDENTE",score:35,correctQuery:"SELECT S.* FROM STUDENTE S JOIN VOTO V ON S.StudenteId = V.StudenteId WHERE V.Voto < 20"},
    {id:40,title:"Corsi Popolari",difficulty:"hard",desc:"Corsi con più di 2 studenti iscritti",table:"CORSO",score:35,correctQuery:"SELECT C.* FROM CORSO C JOIN ISCRIZIONE I ON C.CorsoId = I.CorsoId GROUP BY C.CorsoId, C.NOMECORSO, C.DESCRIZIONE, C.CREDITI, C.DOCENTEID HAVING COUNT(I.StudenteId) > 2"},
    {id:41,title:"Studenti Eccellenti",difficulty:"hard",desc:"Studenti con media voti >= 28",table:"STUDENTE",score:40,correctQuery:"SELECT S.* FROM STUDENTE S JOIN VOTO V ON S.StudenteId = V.StudenteId GROUP BY S.StudenteId, S.Nome, S.Cognome, S.DataNascita, S.Email HAVING AVG(V.Voto) >= 28"},
    {id:42,title:"Corsi senza Docente",difficulty:"hard",desc:"Corsi che non hanno docente assegnato",table:"CORSO",score:30,correctQuery:"SELECT * FROM CORSO WHERE DOCENTEID IS NULL"},
    {id:43,title:"Statistiche Iscrizioni",difficulty:"hard",desc:"Numero totale di iscrizioni",table:"ISCRIZIONE",score:30,correctQuery:"SELECT COUNT(*) FROM ISCRIZIONE"},
    {id:44,title:"Voti per Data",difficulty:"hard",desc:"Voti ordinati per data esame",table:"VOTO",score:30,correctQuery:"SELECT * FROM VOTO ORDER BY DataEsame"},
    {id:45,title:"Crediti Totali",difficulty:"hard",desc:"Somma totale dei crediti di tutti i corsi",table:"CORSO",score:35,correctQuery:"SELECT SUM(CREDITI) FROM CORSO"},
    {id:46,title:"Studenti per Anno",difficulty:"hard",desc:"Studenti nati nel 2000",table:"STUDENTE",score:30,correctQuery:"SELECT * FROM STUDENTE WHERE YEAR(DataNascita) = 2000"},
    {id:47,title:"Corso con Più Crediti",difficulty:"hard",desc:"Il corso con il maggior numero di crediti",table:"CORSO",score:30,correctQuery:"SELECT TOP 1 * FROM CORSO ORDER BY CREDITI DESC"}
];

function executeSQL(query) {
    const q = query.toUpperCase().trim();
    let data = JSON.parse(JSON.stringify(DB[current.table]));
    let limit = null;
    let joinedData = null;
    let groupByCols = [];
    let havingCond = null;

    // Handle TOP
    if (q.includes('TOP')) {
        const topMatch = q.match(/TOP\s+(\d+)/);
        if (topMatch) {
            limit = parseInt(topMatch[1]);
        }
    }

    // Parse FROM and JOIN
    const fromMatch = q.match(/FROM\s+(.+?)(?:\s+WHERE|\s+GROUP|\s+ORDER|\s+LIMIT|$)/);
    if (fromMatch) {
        const fromClause = fromMatch[1];
        if (fromClause.includes(' JOIN ')) {
            const parts = fromClause.split(/\s+JOIN\s+/);
            const base = parts[0].trim();
            const [table, alias] = base.split(/\s+/);
            if (table !== current.table) {
                throw new Error(`Query must reference the correct table: ${current.table}`);
            }
            let currentData = JSON.parse(JSON.stringify(DB[table]));
            for (let i = 1; i < parts.length; i++) {
                const part = parts[i].trim();
                const [tableAlias, onCond] = part.split(/\s+ON\s+/);
                const [table2, alias2] = tableAlias.split(/\s+/);
                const table2Data = DB[table2];
                const newJoined = [];
                currentData.forEach(row1 => {
                    table2Data.forEach(row2 => {
                        const combinedRow = {...row1, ...row2};
                        const [left, right] = onCond.split('=').map(s => s.trim());
                        const [leftAlias, leftCol] = left.split('.');
                        const [rightAlias, rightCol] = right.split('.');
                        if (row1[leftCol] === row2[rightCol]) {
                            newJoined.push(combinedRow);
                        }
                    });
                });
                currentData = newJoined;
            }
            data = currentData;
        } else {
            const table = fromClause.trim();
            if (table !== current.table) {
                throw new Error(`Query must reference the correct table: ${current.table}`);
            }
            data = JSON.parse(JSON.stringify(DB[table]));
        }
    } else {
        throw new Error(`Query must include a FROM clause referencing the correct table: ${current.table}`);
    }

    // WHERE
    if (q.includes('WHERE')) {
        const whereMatch = q.match(/WHERE\s+(.+?)(?:\s+GROUP|\s+ORDER|\s+LIMIT|$)/);
        if (whereMatch) {
            const cond = whereMatch[1];
            data = data.filter(row => evaluateCondition(cond, row));
        }
    }

    // GROUP BY
    if (q.includes('GROUP BY')) {
        const groupMatch = q.match(/GROUP BY\s+(.+?)(?:\s+HAVING|\s+ORDER|\s+LIMIT|$)/);
        if (groupMatch) {
            groupByCols = groupMatch[1].split(',').map(c => c.trim());
            const grouped = {};
            data.forEach(row => {
                const key = groupByCols.map(col => {
                    if (col.includes('.')) {
                        const [alias, c] = col.split('.');
                        return row[c];
                    } else {
                        return row[col];
                    }
                }).join('|');
                if (!grouped[key]) grouped[key] = [];
                grouped[key].push(row);
            });
            data = Object.values(grouped).map(group => {
                const result = {};
                groupByCols.forEach(col => {
                    if (col.includes('.')) {
                        const [alias, c] = col.split('.');
                        result[col] = group[0][c];
                    } else {
                        result[col] = group[0][col];
                    }
                });
                // Add aggregates
                result._group = group;
                return result;
            });
        }
    }

    // HAVING
    if (q.includes('HAVING')) {
        const havingMatch = q.match(/HAVING\s+(.+?)(?:\s+ORDER|\s+LIMIT|$)/);
        if (havingMatch) {
            havingCond = havingMatch[1];
            data = data.filter(groupRow => {
                const group = groupRow._group;
                return evaluateHaving(havingCond, group);
            });
        }
    }

    // Aggregates (for non-grouped or grouped)
    if (q.includes('COUNT(*)')) return [{COUNT: data.length}];
    if (q.includes('AVG(')) {
        let col = q.match(/AVG\((.+?)\)/)[1];
        if (col.includes('.')) col = col.split('.').pop();
        if (data[0] && data[0]._group) {
            // Grouped AVG
            return data.map(g => ({AVG: Math.round(g._group.reduce((s,r) => s + r[col], 0) / g._group.length)}));
        } else {
            return [{AVG: Math.round(data.reduce((s,r) => s + r[col], 0) / data.length)}];
        }
    }
    if (q.includes('SUM(')) {
        const match = q.match(/SUM\((.+?)\)/);
        let expr = match[1];
        if (expr.includes('.')) expr = expr.split('.').pop();
        if (data[0] && data[0]._group) {
            return data.map(g => ({SUM: g._group.reduce((s,r) => s + r[expr], 0)}));
        } else {
            return [{SUM: data.reduce((s,r) => s + r[expr], 0)}];
        }
    }
    if (q.includes('MAX(')) {
        let col = q.match(/MAX\((.+?)\)/)[1];
        if (col.includes('.')) col = col.split('.').pop();
        if (data[0] && data[0]._group) {
            return data.map(g => ({MAX: Math.max(...g._group.map(r => r[col]))}));
        } else {
            return [{MAX: Math.max(...data.map(r => r[col]))}];
        }
    }
    if (q.includes('MIN(')) {
        let col = q.match(/MIN\((.+?)\)/)[1];
        if (col.includes('.')) col = col.split('.').pop();
        if (data[0] && data[0]._group) {
            return data.map(g => ({MIN: Math.min(...g._group.map(r => r[col]))}));
        } else {
            return [{MIN: Math.min(...data.map(r => r[col]))}];
        }
    }

    // ORDER BY
    if (q.includes('ORDER BY')) {
        const orderMatch = q.match(/ORDER BY\s+(.+?)(\s+(ASC|DESC))?/);
        if (orderMatch) {
            let col = orderMatch[1];
            if (col.includes('.')) col = col.split('.').pop();
            const desc = orderMatch[3] === 'DESC';
            data.sort((a,b) => {
                if (typeof a[col] === 'string') {
                    return desc ? b[col].localeCompare(a[col]) : a[col].localeCompare(b[col]);
                }
                return desc ? b[col] - a[col] : a[col] - b[col];
            });
        }
    }

    // LIMIT or TOP
    if (limit !== null) {
        data = data.slice(0, limit);
    } else if (q.includes('LIMIT')) {
        const limitVal = parseInt(q.match(/LIMIT\s+(\d+)/)[1]);
        data = data.slice(0, limitVal);
    }

    // SELECT columns
    const selectMatch = q.match(/SELECT\s+(?:TOP\s+\d+\s+)?(.+?)\s+FROM/);
    if (selectMatch && selectMatch[1] !== '*') {
        const cols = selectMatch[1].split(',').map(c => c.trim());
        data = data.map(row => {
            const obj = {};
            cols.forEach(c => {
                if (c.includes('.')) {
                    const [alias, colName] = c.split('.');
                    obj[c] = row[colName]; // Simplified, assumes alias is ignored
                } else {
                    obj[c] = row[c];
                }
            });
            return obj;
        });
    }

    return data;
}

function evaluateCondition(cond, row) {
    if (cond.includes('IS NULL')) {
        let col = cond.split(' IS NULL')[0].trim();
        if (col.includes('.')) col = col.split('.').pop();
        return row[col] === null;
    }
    if (cond.includes('IS NOT NULL')) {
        let col = cond.split(' IS NOT NULL')[0].trim();
        if (col.includes('.')) col = col.split('.').pop();
        return row[col] !== null;
    }
    if (cond.includes('YEAR(')) {
        const yearMatch = cond.match(/YEAR\((.+?)\)\s*=\s*(\d+)/);
        if (yearMatch) {
            let col = yearMatch[1];
            if (col.includes('.')) col = col.split('.').pop();
            const year = parseInt(yearMatch[2]);
            const dateStr = row[col];
            if (dateStr) {
                const dateYear = new Date(dateStr).getFullYear();
                return dateYear === year;
            }
            return false;
        }
    }
    if (cond.includes('>=')) {
        let [col, val] = cond.split('>=').map(s => s.trim());
        if (col.includes('.')) col = col.split('.').pop();
        return row[col] >= Number(val);
    }
    if (cond.includes('<=')) {
        let [col, val] = cond.split('<=').map(s => s.trim());
        if (col.includes('.')) col = col.split('.').pop();
        return row[col] <= Number(val);
    }
    if (cond.includes('>')) {
        let [col, val] = cond.split('>').map(s => s.trim());
        if (col.includes('.')) col = col.split('.').pop();
        return row[col] > Number(val);
    }
    if (cond.includes('<')) {
        let [col, val] = cond.split('<').map(s => s.trim());
        if (col.includes('.')) col = col.split('.').pop();
        return row[col] < Number(val);
    }
    if (cond.includes('!=')) {
        let [col, val] = cond.split('!=').map(s => s.trim());
        if (col.includes('.')) col = col.split('.').pop();
        return row[col] != val.replace(/'/g, '');
    }
    if (cond.includes('=')) {
        let [col, val] = cond.split('=').map(s => s.trim());
        if (col.includes('.')) col = col.split('.').pop();
        const cleanVal = val.replace(/'/g, '');
        return row[col] == (isNaN(cleanVal) ? cleanVal : Number(cleanVal));
    }
    if (cond.includes(' AND ')) {
        const parts = cond.split(' AND ');
        return parts.every(p => evaluateCondition(p, row));
    }
    if (cond.includes(' IN ')) {
        let [col, vals] = cond.split(' IN ');
        col = col.trim();
        if (col.includes('.')) col = col.split('.').pop();
        const arr = vals.replace(/[()]/g, '').split(',').map(v => v.trim().replace(/'/g, ''));
        return arr.includes(String(row[col]));
    }
    if (cond.includes(' LIKE ')) {
        let [col, pattern] = cond.split(' LIKE ');
        col = col.trim();
        if (col.includes('.')) col = col.split('.').pop();
        const p = pattern.replace(/'/g, '').replace(/%/g, '');
        return String(row[col]).startsWith(p);
    }
    return true;
}

function evaluateHaving(cond, group) {
    if (cond.includes('AVG(')) {
        const avgMatch = cond.match(/AVG\((.+?)\)\s*(>=|>)\s*(\d+)/);
        if (avgMatch) {
            let col = avgMatch[1];
            if (col.includes('.')) {
                col = col.split('.').pop();
            }
            const op = avgMatch[2];
            const val = Number(avgMatch[3]);
            const avg = group.reduce((s,r) => s + r[col], 0) / group.length;
            return op === '>=' ? avg >= val : avg > val;
        }
    }
    if (cond.includes('COUNT(')) {
        const countMatch = cond.match(/COUNT\((.+?)\)\s*(>=|>)\s*(\d+)/);
        if (countMatch) {
            let expr = countMatch[1];
            if (expr.includes('.') && expr !== '*') {
                expr = expr.split('.').pop();
            }
            const op = countMatch[2];
            const val = Number(countMatch[3]);
            const count = expr === '*' ? group.length : group.filter(r => r[expr] !== null && r[expr] !== undefined).length;
            return op === '>=' ? count >= val : count > val;
        }
    }
    // Add more HAVING conditions as needed
    return true;
}

function submitCode(userQuery, correctQuery, table) {
    current = {table: table};
    const userResult = executeSQL(userQuery);
    const correctResult = executeSQL(correctQuery);

    // Compare results (normalize for comparison)
    const normalizeResult = (res) => JSON.stringify(res.map(r => {
        const sorted = {};
        Object.keys(r).sort().forEach(k => sorted[k] = r[k]);
        return sorted;
    }));

    return normalizeResult(userResult) === normalizeResult(correctResult);
}

// Test function
function runTests() {
    console.log('Iniziando test approfonditi delle sfide SQL...\n');

    let passed = 0;
    let failed = 0;
    const failedTests = [];

    challenges.forEach(challenge => {
        try {
            const result = submitCode(challenge.correctQuery, challenge.correctQuery, challenge.table);
            if (result) {
                console.log(`✓ Sfida ${challenge.id}: ${challenge.title} - PASSATO`);
                passed++;
            } else {
                console.log(`✗ Sfida ${challenge.id}: ${challenge.title} - FALLITO`);
                failed++;
                failedTests.push(challenge.id);
            }
        } catch (e) {
            console.log(`✗ Sfida ${challenge.id}: ${challenge.title} - ERRORE: ${e.message}`);
            failed++;
            failedTests.push(challenge.id);
        }
    });

    console.log(`\nRisultati test:`);
    console.log(`Passati: ${passed}`);
    console.log(`Falliti: ${failed}`);
    if (failedTests.length > 0) {
        console.log(`Sfide fallite: ${failedTests.join(', ')}`);
    }

    return {passed, failed, failedTests};
}

// Run the tests
runTests();
