# Portfolio : Bachelor's Projects

Welcome to my GitHub portfolio. This page showcases projects completed during my Bachelor's degree, each carried out in collaboration with a team. They reflect the technical and methodological skills I developed throughout my studies.

> ⚠️ **A note on authorship**: All projects listed here are **group work**. The code, analyses, and deliverables are the result of collective collaboration. I do not claim sole ownership over any of these works — I present them solely as evidence of my active participation and the skills I developed in an academic context.

---

## Table of Contents

- [Hopfield Neural Network](#-hopfield-neural-network--bio-210-epfl)
- [Cloud Computing & Big Data — Azure Blob Storage Benchmarking](#️-cloud-computing--big-data--azure-blob-storage-benchmarking)
- [Mapping the Philosophical Field — Wikidata](#-mapping-the-philosophical-field--wikidata)
- [Database Project — "Flans" Management System](#️-database-project--flans-management-system)
- [Languages & Compilers — SonicRPG Interpreter (ANTLR)](#️-languages--compilers--sonicrpg-interpreter-antlr)
- [Statistical Learning — R Projects](#-statistical-learning--r-projects)
- [Computational Statistics — Predicting Home Prices](#-computational-statistics--predicting-home-prices)
- [Cybersecurity — TryHackMe Notes & Writeups](#-cybersecurity--tryhackme-notes--writeups)

---

## Hopfield Neural Network — BIO-210 EPFL

**Collaboration:** Group project for the Software Engineer in Life Science course, Anastasia Eigenbrot, Anastasia Kokorich, Salsabil Mtiraoui 
[hopfield](https://github.com/SalsabilMtiraoui/hopfield) · [BIO-210-CourseMaterials](https://github.com/SalsabilMtiraoui/BIO-210-CourseMaterials)

### Overview
Simulation of associative memory using the Hopfield neural network model. The project explores the network's ability to store and retrieve patterns, with a strong focus on reproducible and collaborative scientific programming practices.

### What We Built
- Implemented **Hebbian and Storkey learning rules** from scratch in Python
- Pattern storage and recall mechanisms (both synchronous and asynchronous dynamics)
- Energy minimization visualization across network states
- **Capacity tests**: capacity-vs-network-size curves for both learning rules
- **Robustness tests**: fraction of correctly retrieved patterns as a function of perturbation level
- **Correlated patterns**: study of how pattern correlation affects storage capacity
- **Image reconstruction** from corrupted versions — a concrete demonstration of associative memory
- Full suite of **unit and functional tests** (pytest, doctest, coverage)
- **Performance profiling** with `cProfile` and optimization via Cython
- Reproducible environment management with Conda

### Tools & Technologies
`Python` `NumPy` `Matplotlib` `SciPy` `pytest` `doctest` `coverage` `cProfile` `Cython` `HDF5 (PyTables)` `Conda` `GitHub`

---

## Cloud Computing & Big Data — Azure Blob Storage Benchmarking

**Collaboration:** Group project in Cloud Computing & Big Data course (CCBD), Ibraimov Erulan, Salsabil Mtiraoui*  
[CCBD-variant1](https://github.com/SalsabilMtiraoui/CCBD-variant1)

### Overview
Comparative benchmark of storage and query performance on large-scale synthetic datasets (up to 100 million rows) hosted on **Azure Blob Storage**, comparing the **CSV** and **Parquet** formats.

### What We Built
- Generated **large-scale synthetic financial datasets** (S/M/L sizes: 5M, 25M, 100M rows) with realistic transaction data (regions, currencies, event types, statuses)
- Upload/download of datasets to/from Azure Blob Storage with **throughput measurement (MB/s)**
- **Analytical queries on Parquet** using `pyarrow.dataset` (filters, aggregations) with execution time tracking
- Equivalent queries on CSV using chunked reading for memory efficiency
- **Blob listing** benchmarking
- Automated collection and export of benchmark results to CSV
- Comparative analysis in Jupyter Notebook: Parquet compression ratio vs CSV, access speed, scalability

### Tools & Technologies
`Python` `Azure Blob Storage (azure-storage-blob)` `Apache Parquet (pyarrow)` `pandas` `Jupyter Notebook` `dotenv` `argparse`

---

## Mapping the Philosophical Field — Wikidata

Project in Data Science / Digital Humanities course   
🔗 [philosophers](https://github.com/SalsabilMtiraoui/philosophers)

### Overview
Modelling the structure of Western philosophy using data extracted from **Wikidata** (Wikipedia's A–C list of philosophers). Socio-demographic analysis, intellectual network analysis, and temporal evolution of philosophical schools of thought.

### What We Built
- **Data extraction** from Wikidata via SPARQL queries: names, nationalities, genders, birth dates, schools of thought, institutional affiliations, teacher-student relationships
- **Socio-demographic analysis**: distributions by gender, nationality, and birth century
- **Bivariate analysis** with chi-squared tests to identify correlations (e.g. geographic origin vs. philosophical school)
- **Network analysis**: visualization of teacher-student lineages and institutional affiliations using graph theory
- **Interactive visualizations** (Plotly, network graphs)
- Data export as **RDF/Turtle** for use as Linked Open Data
- Structured project documentation (research questions, methodology, findings)

### Tools & Technologies
`Python` `pandas` `Matplotlib` `Plotly` `NetworkX` `Wikidata / SPARQL` `RDF / Turtle (rdflib)` `Jupyter Notebook` `chi-squared test (scipy.stats)` `GitHub Pages`

---

## Database Project — "Flans" Management System

**Collaboration:** Group project in Database course, Mariana Bessa Pires, Tara Shareef, Salsabil Mtiraoui, Iseline Lomami  
 [Data-Base-Project_Flan](https://github.com/SalsabilMtiraoui/Data-Base-Project_Flan)

### Overview
Full design and implementation of a relational database for a management application (the "Flans" system — covering persons, actors, awards, and directors). The project spans the entire database project lifecycle, from conceptual modelling to data visualisation.

### What We Built
- **Conceptual model** (Entity-Relationship diagram) designed with draw.io
- Derivation of the **relational model** from the conceptual model
- Full **SQL schema implementation**: table creation, integrity constraints, primary and foreign keys
- Complex **analytical SQL queries**
- Database population with a realistic **SQL data insertion script**
- **Data dictionary** documenting every entity and attribute
- **Data visualisations** built with Tableau (`.twb`)
- Written report and final presentation

### Tools & Technologies
`MySQL / SQL` `draw.io (ERD / UML modelling)` `Tableau` `Excel (data dictionary)` `PDF (report)`

---

##  Languages & Compilers — SonicRPG Interpreter (ANTLR)

**Collaboration:** Group project in Languages & Compilers course, "Lovelace" team, Laila Ibrahim, Salsabil Mtiraoui, Verica Dimitrova, Milena Loreto 
 [Language-Compilers_ANTLR](https://github.com/SalsabilMtiraoui/Language-Compilers_ANTLR)

### Overview
Design and implementation of a **domain-specific language (DSL)** for a Sonic-inspired text-based RPG, complete with its own interpreter. The project covers the full compilation pipeline: formal grammar, lexer, parser, and interpretation.

### What We Built
- Defined a **formal ANTLR4 grammar** (`SonicRPG.g4`): lexical tokens (game keywords, directions, objects, operators), syntactic rules for commands, control structures (`IF/ELSE/ENDIF`, `LOOP/ENDLOOP`), arithmetic and logical expressions
- Auto-generated **Lexer and Parser** from the grammar (ANTLR4 → Python)
- Implemented a **full interpreter** (`SonicInterpreter.py`): game state management (position, inventory, health), expression evaluation, command execution
- Supported commands: `MOVE`, `COLLECT`, `FIGHT`, `BOSS`, `SAY`, `SAVE`, `LOAD`, `INVENTORY`, `STATUS`, `MAP`, `HELP`, `WAIT`
- Delivered a full project report and demo (`Super Sonic.pdf`)

### Tools & Technologies
`ANTLR4` `Python` `Java (ANTLR runtime)` `Formal language theory` `DSL design` `Abstract Syntax Trees (AST)` `Visitor pattern`

---

## Statistical Learning — R Projects

**Collaboration:** Group projectin Statistical Learning course (two independent studies)  
 [Statistical-Learning-Project_Leiria-Grischun](https://github.com/SalsabilMtiraoui/Statistical-Learning-Project_Leiria-Grischun)

**Grischun team:** Alexandre Ferreira Magalhaes, Paul Micheli, Domenico Fazzino, Salsabil Mtiraoui, Helan Mohamed  
**Reiria team:** Nilay Temel, Verica Dimitrova, Mariia Ponomarova, Laila Ibrahim, Salsabil Mtiraoui, Kamila Abazi, Clara Comanescu

### Overview
Two independent statistical studies using R, applied to real-world datasets with inferential and regression methods.

### Grischun Project — Olympic Medals & GDP
- Analysis of the **relationship between countries' GDP and their Olympic performance** (medal counts)
- Visualisations: bar plots for the top 30 countries, GDP vs. medals scatter plots (logarithmic scale)
- Outlier identification and correlation discussion

### Reiria Project — Air Quality & Respiratory Diseases
- Analysis of the relationship between **PM2.5 concentration, smoking rates, and chronic respiratory disease mortality** (worldwide 2019 data)
- Multiple linear regression: `lm(crd ~ pm25 + Smoking)`
- Assumption checks: normality (Q-Q plots), homoscedasticity (Breusch-Pagan test)
- Visualisation of the **partial effects** of each predictor

### What We Built (shared)
- Data exploration, cleaning, and merging of CSV datasets
- Descriptive statistical analysis (`summary`, distributions)
- Simple and multiple linear regression modelling
- Model assumption validation (residuals, normality, homoscedasticity)
- Documented PDF reports

### Tools & Technologies
`R` `base R graphics` `lm()` `lmtest (Breusch-Pagan)` `Multiple linear regression` `Statistical testing` `RMarkdown / PDF`

---

## Computational Statistics — Predicting Home Prices

**Collaboration:** Group project in Computational Statistics course, Angeliki Andreadi, Laila Ibrahim, Salsabil Mtiraoui 
[From-Features-to-Forecasts-Predicting-Home-Prices-Using-Computational-Statistics](https://github.com/Laillaa/From-Features-to-Forecasts-Predicting-Home-Prices-Using-Computational-Statistics)

### Overview
End-to-end statistical analysis of the **Ames Housing dataset** (Kaggle) to predict residential sale prices. The project applies a broad range of computational statistics techniques, from feature engineering and factorial design to multiple regression and time series modelling — with a focus on understanding the methods rather than purely maximising predictive performance.

### What We Built
- **Data preprocessing pipeline**: classified 79 variables into quantitative, binary, and categorical subsets, each handled with type-appropriate statistical treatment; dropped incomplete columns and ID fields
- **Feature selection for quantitative variables**: custom `descriptive_stats` function extending `.describe()` with 95% confidence intervals; `hypothesis_test` function computing Pearson correlation coefficients and p-values against `SalePrice`; custom ranking function combining correlation strength, p-value significance, and feature variance
- **Feature selection for categorical variables**: `rank_categorical_vars` function using ANOVA p-values and mean range to score and rank features by influence on sale price
- **2³ Factorial Design**: applied full factorial design on three binary variables (`Street`, `Utilities`, `CentralAir`), including all main effects and interaction terms; critically analysed its limits (R² = 0.064, multicollinearity, sparse factor combinations) and justified why more scalable methods were preferred
- **Multiple Linear Regression (OLS)**: built a model combining top quantitative variables (Pearson / p-value selection) and top 10 categorical variables (ANOVA ranking), one-hot encoded; achieved **R² = 0.843** and adjusted R² = 0.833 on 1460 observations
- **Residual diagnostics**: Omnibus test, Jarque-Bera test, skewness/kurtosis analysis, Durbin-Watson test (DW = 1.912, no autocorrelation), condition number analysis (multicollinearity flagged); Q-Q plots, residuals vs. fitted, histogram of residuals
- **Interpretation of categorical coefficients**: identified the 20 most impactful categories (e.g. `Neighborhood_NoRidge`, `SaleType_New` → positive; `KitchenQual_Fa`, `Exterior1st_ImStucc` → negative)
- **Time Series Analysis**: aggregated monthly average sale prices (Jan 2006 – Jul 2010); applied 6-month and 12-month **moving average smoothing** to reveal a downward trend linked to the **2008 Subprime Mortgage Crisis**
- **Stationarity testing**: Augmented Dickey-Fuller (ADF) test → p-value = 0.0036, confirmed stationarity without differencing
- **ACF / PACF analysis**: identified a dominant spike at lag 4, no seasonal structure detected
- **ARIMA model selection**: compared AR(4), MA(4), ARMA(4,4), ARIMA(0,0,4), and SARIMAX(1,0,1)(1,0,0,12) by AIC/BIC; selected **ARIMA(4,0,0)** as the best-fit, most parsimonious model

### Results
| Metric | Value |
|---|---|
| R² (OLS regression) | **0.843** |
| Adjusted R² | 0.833 |
| F-statistic p-value | ≈ 0 |
| ADF test p-value | 0.0036 |
| Best time series model | ARIMA(4,0,0) — AIC: 1226.86 |

### Tools & Technologies
`Python` `pandas` `NumPy` `statsmodels (OLS, ARIMA, SARIMAX)` `scipy.stats (Pearson, ANOVA)` `Matplotlib` `One-hot encoding` `ACF / PACF` `ADF test` `2ᵏ Factorial Design` `Jupyter Notebook` `Google Colab` `Kaggle datasets`

---

## Cybersecurity — TryHackMe Notes & Writeups

**Collaboration:** Personal structured effort, organised as a shared knowledge vault, Cybersecurity coursework & self-study  
[cybersec-notes](https://github.com/SalsabilMtiraoui/cybersec-notes)

### Overview
Personal cybersecurity knowledge base structured with **Obsidian**, covering the *Junior Pentester Path* on TryHackMe and offensive security methodologies.

### What I Built
- Full documentation of the **JR Pentester Path** (10 modules): Intro to Cybersecurity, Pre-Security, Introduction to Pentesting, Linux Fundamentals, Web Fundamentals, Burp Suite, Network Security, Vulnerability Research, Metasploit, Privilege Escalation
- **Tool reference sheets**: Nmap, Burp Suite, Metasploit, Hydra, Gobuster, Wireshark
- **Methodologies**: 5 phases of pentesting (Recon → Scanning → Exploitation → Post-Exploitation → Reporting), OWASP Top 10, Recon Checklist
- **Documented vulnerabilities**: SQLi, XSS, Linux Privilege Escalation
- **CTF writeups** (Capture The Flag)
- Cheatsheets: Linux commands, reverse shells
- Progression dashboard with **Dataview** (Obsidian plugin)

### Tools & Technologies
`Obsidian` `TryHackMe` `Nmap` `Burp Suite` `Metasploit` `Hydra` `Gobuster` `Wireshark` `Linux` `OWASP` `CTF` `OSINT`

---

## Skills Overview

| Domain | Technologies & Tools |
|---|---|
| **Programming** | Python, R, SQL, Java |
| **Data Science / ML** | NumPy, pandas, NetworkX, SPARQL, scipy, statsmodels |
| **Data Visualisation** | Matplotlib, Plotly, Tableau, base R graphics |
| **Cloud & Big Data** | Azure Blob Storage, Apache Parquet, pyarrow |
| **Databases** | MySQL, ERD modelling, draw.io |
| **Compilers / DSL** | ANTLR4, formal language theory, AST |
| **Testing & Quality** | pytest, doctest, coverage, cProfile, Cython |
| **Cybersecurity** | Pentesting, OWASP, Nmap, Burp Suite, Metasploit |
| **Tooling & Workflow** | Git/GitHub, Conda, Jupyter, Obsidian, LaTeX |

---

*Portfolio built from academic group projects completed during a Bachelor's degree in Computer Science / Data Science.*
