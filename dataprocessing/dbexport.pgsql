--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: lms_schemas; Type: SCHEMA; Schema: -; Owner: aissata
--

CREATE SCHEMA lms_schemas;


ALTER SCHEMA lms_schemas OWNER TO aissata;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Author; Type: TABLE; Schema: public; Owner: aissata
--

CREATE TABLE public."Author" (
    "ISBN" character varying(50) NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public."Author" OWNER TO aissata;

--
-- Name: Books; Type: TABLE; Schema: public; Owner: aissata
--

CREATE TABLE public."Books" (
    "ISBN" character varying(50) NOT NULL,
    title character varying(50) NOT NULL,
    publisher character varying(50) NOT NULL,
    publication_date date NOT NULL,
    prequel character varying(50) NOT NULL
);


ALTER TABLE public."Books" OWNER TO aissata;

--
-- Name: Borrowed; Type: TABLE; Schema: public; Owner: aissata
--

CREATE TABLE public."Borrowed" (
    "borrowing_ID" integer NOT NULL,
    "resource_ID" integer NOT NULL,
    "user_ID" integer NOT NULL,
    issue_date date NOT NULL,
    expiry_date date NOT NULL,
    return_date date
);


ALTER TABLE public."Borrowed" OWNER TO aissata;

--
-- Name: Genre; Type: TABLE; Schema: public; Owner: aissata
--

CREATE TABLE public."Genre" (
    "ISBN" character varying(50) NOT NULL,
    "Genre" character varying(50) NOT NULL
);


ALTER TABLE public."Genre" OWNER TO aissata;

--
-- Name: Resources; Type: TABLE; Schema: public; Owner: aissata
--

CREATE TABLE public."Resources" (
    "resource_ID" integer NOT NULL,
    "ISBN" character varying(50) NOT NULL
);


ALTER TABLE public."Resources" OWNER TO aissata;

--
-- Name: politician; Type: TABLE; Schema: public; Owner: aissata
--

CREATE TABLE public.politician (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.politician OWNER TO aissata;

--
-- Name: returns; Type: TABLE; Schema: public; Owner: aissata
--

CREATE TABLE public.returns (
    borrowing_id integer NOT NULL,
    return_date date NOT NULL
);


ALTER TABLE public.returns OWNER TO aissata;

--
-- Data for Name: Author; Type: TABLE DATA; Schema: public; Owner: aissata
--

COPY public."Author" ("ISBN", name) FROM stdin;
\.


--
-- Data for Name: Books; Type: TABLE DATA; Schema: public; Owner: aissata
--

COPY public."Books" ("ISBN", title, publisher, publication_date, prequel) FROM stdin;
978-8-071-45706-0	The Fellowship of the Ring	George Allen & Unwin	1954-07-29	The Hobbit\r
978-8-372-98061-8	The Two Towers	George Allen & Unwin	1954-11-11	The Fellowship of the Ring\r
978-0-261-10294-1	The Return of the King	George Allen & Unwin	1955-10-20	The Two Towers\r
0-7475-3269-9	Harry Potter and the Philospher's Stone	Bloomsbury (UK) 	1998-07-02	Harry Potter and the Chamber of Secrets\r
0-7475-3849-2	Harry Potter and the Chamber of Secrets	Bloomsbury (UK)	2002-11-22	Harry Potter and the Philosopher's Stone\r
0-7475-4215-5	Harry Potter and the Prisoner of Azkaban	Bloomsbury (UK) 	1999-07-08	Harry Potter and the Chamber of Secrets\r
0-7475-4624-X	Harry Potter and the Goblet of Fire	Bloomsbury (UK) 	2000-07-08	Harry Potter and the Prisoner of Azkaban\r
0-7475-5100-6	Harry Potter and the Order of the Pheonix	Bloomsbury (UK)	2003-06-21	Harry Potter and the Goblet of Fire\r
0-7475-8108-8	Harry potter and the Half-Blood Prince	Bloomsbury (UK)	2005-07-16	No_Prequels\r
0-545-01022-5	Harry Potter and the Deathly Hallows	Bloomsbury (UK) (Canada 2010–present)	2007-07-21	No_Prequels\r
978-1-47-133143-5	Nineteen Eighty-Four	Secker & Warburg	1949-06-08	No_Prequels\r
978-1-428-11370-1	To Kill a Mockingbird	J. B. Lippincott & Co.	1960-07-11	No_Prequels\r
978-0-06-240985-0	Go Set a Watchman	HarperCollins	2015-07-14	No_Prequels\r
978-0-321-78107-9	Calculus	Pearson Addison Wesley	2013-01-01	No_Prequels
\.


--
-- Data for Name: Borrowed; Type: TABLE DATA; Schema: public; Owner: aissata
--

COPY public."Borrowed" ("borrowing_ID", "resource_ID", "user_ID", issue_date, expiry_date, return_date) FROM stdin;
3001	10003	20008	2019-09-10	2019-09-20	2019-09-19
3002	10004	20009	2019-09-01	2019-09-11	2019-09-10
3003	10016	20003	2019-09-02	2019-09-12	2019-09-12
3004	10005	20010	2019-06-01	2019-06-11	2019-06-21
3005	10006	20004	2019-06-11	2019-06-21	2019-06-25
3006	10007	20012	2019-07-11	2019-07-21	2019-07-23
3007	10017	20030	2019-09-30	2019-10-10	\N
3008	10016	20030	2019-09-29	2019-10-09	\N
3009	10015	20016	2019-09-29	2019-10-09	\N
\.


--
-- Data for Name: Genre; Type: TABLE DATA; Schema: public; Owner: aissata
--

COPY public."Genre" ("ISBN", "Genre") FROM stdin;
\.


--
-- Data for Name: Resources; Type: TABLE DATA; Schema: public; Owner: aissata
--

COPY public."Resources" ("resource_ID", "ISBN") FROM stdin;
10023	978-0-321-78107-9
10022	978-0-06-240985-0
10021	978-1-428-11370-1
10020	978-1-47-133143-5
10019	0-545-01022-5
10018	0-7475-8108-8
10017	0-7475-5100-6
10016	0-7475-4624-X
10015	0-7475-4624-X
10014	0-7475-4624-X
10013	0-7475-4215-5
10012	0-7475-3849-2
10011	0-7475-3849-2
10010	0-7475-3849-2
10009	0-7475-3269-9
10008	0-7475-3269-9
10007	978-0-261-10294-1
10006	978-0-261-10294-1
10005	978-8-372-98061-8
10004	978-8-372-98061-8
10003	978-8-071-45706-0
10002	978-8-071-45706-0
10001	978-8-071-45706-0
\.


--
-- Data for Name: politician; Type: TABLE DATA; Schema: public; Owner: aissata
--

COPY public.politician (id, name) FROM stdin;
\.


--
-- Data for Name: returns; Type: TABLE DATA; Schema: public; Owner: aissata
--

COPY public.returns (borrowing_id, return_date) FROM stdin;
3001	2019-09-19
3002	2019-09-10
3003	2019-09-12
3004	2019-06-21
3005	2019-06-25
3006	2019-07-23
\.


--
-- Name: Author Author_pkey; Type: CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Author"
    ADD CONSTRAINT "Author_pkey" PRIMARY KEY ("ISBN");


--
-- Name: Books Books_pkey; Type: CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Books"
    ADD CONSTRAINT "Books_pkey" PRIMARY KEY ("ISBN");


--
-- Name: Borrowed Borrowed_pkey; Type: CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Borrowed"
    ADD CONSTRAINT "Borrowed_pkey" PRIMARY KEY ("borrowing_ID");


--
-- Name: Genre Genre_pkey; Type: CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Genre"
    ADD CONSTRAINT "Genre_pkey" PRIMARY KEY ("ISBN");


--
-- Name: Resources Resources_pkey; Type: CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Resources"
    ADD CONSTRAINT "Resources_pkey" PRIMARY KEY ("resource_ID");


--
-- Name: politician politician_pkey; Type: CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public.politician
    ADD CONSTRAINT politician_pkey PRIMARY KEY (id);


--
-- Name: returns returns_pkey; Type: CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public.returns
    ADD CONSTRAINT returns_pkey PRIMARY KEY (borrowing_id);


--
-- Name: Author Author_ISBN_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Author"
    ADD CONSTRAINT "Author_ISBN_fkey" FOREIGN KEY ("ISBN") REFERENCES public."Books"("ISBN");


--
-- Name: Borrowed Borrowed_resource_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Borrowed"
    ADD CONSTRAINT "Borrowed_resource_ID_fkey" FOREIGN KEY ("resource_ID") REFERENCES public."Resources"("resource_ID");


--
-- Name: Genre Genre_ISBN_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Genre"
    ADD CONSTRAINT "Genre_ISBN_fkey" FOREIGN KEY ("ISBN") REFERENCES public."Books"("ISBN");


--
-- Name: Resources Resources_ISBN_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public."Resources"
    ADD CONSTRAINT "Resources_ISBN_fkey" FOREIGN KEY ("ISBN") REFERENCES public."Books"("ISBN");


--
-- Name: returns returns_borrowing_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aissata
--

ALTER TABLE ONLY public.returns
    ADD CONSTRAINT returns_borrowing_id_fkey FOREIGN KEY (borrowing_id) REFERENCES public."Borrowed"("borrowing_ID");


--
-- PostgreSQL database dump complete
--

