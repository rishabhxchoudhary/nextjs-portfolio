---
title: "DBMS Notes for Interviews"
date: "8 July 2023"
category: "CP & Interviews"
tags: ['DBMS']
about: ""
---

- Data: Any fact which can be recorded.
- Database: Collection of interrelated data
- Database Management System: Set of programs or software used to define, store and manupulate data.
- DB+DBMS = DBS (Database System)
 

# Database Management System (DBMS)

- DBMS contains information about a particular enterprice.
- DBMS is an environment that is both convenient and efficient use.
- it stores data in such a way that it becomes easier to retrive and produce information.

# View of Data

- Abstraction is one of the main features of database systems.

1. Physical Level (Internal Level)
- lowest Level
- describes how data is actually stores

2. Logical Level (Conceptual Level)
- 3 level data abstraction architecture
- what data and what relationshops exists among data

3. View Level (External Level)
- Highest level of data abstraction
-  Describes user interaction

## Schemas and Instances
- Schemas and Instances are similar to types and variable in programming languages.

Schema:  Overall design of a database is called the schema

1. Physical Schemea:
- Describes physical structure of database
2. Logical Schemas:
- Describes Logical Structures
3. Sub-schema or (view Schema):
- Describes user interaction with database Systems

Instances: Dta stored in database at a particular moment of time is called instance of database.

## Data Independence
- The ability to modify the schema at one level of database systems without altering the schema at the next higher level.

1. Logical Data Independence
2. Physical Data Independence

## Data Models in DBMS

- A model is a concept of tools that are developed to summarize the description of the database.
- Defined the logical structure of a database.
- A data model is a collection of conceptual tools for describing.

Types:
1. Relational Data Model
2. Entity Relationshp Data Model
3. Object-base database model
4. Semi-Structured Data model.

## Relational Model
- most widely used.
- uses collection of tables.
- tables are called relations
- table is a group of colums and rows.
- columns are calls are called attriutes and rows are called records/tuples.

## Entitiy Relationship Model
- high level data model digram
- provides blueprint 
- 3 compoents:
1. Entities
2. Attributes
3. Relationship

## Semi-structured data model
- it is flexible
- can container more or empty data
- Ex. XML/JSON

# Database Languages
Mainly 2 types of database languages:

1. Data definition languag(DDL)
    - DDL is used to specifying database schema.
    - used for creating tables, schemas, indexing.
    - DDL is used to store the information of meta data like the number of tables and schemas and their names, columns in each table, constrains, etc.
    - Create, alter, drop, tuncate, rename.

2. Data Manupulation language (DML)
    - Query Language
    1. Procedural DMLs/ High level dml
        - user specifies what data is required and how to get those data.
    2. Declarative DML
        - user specifies what data is required only.
    - SELECT, INSERT, UPDATE, DELETE

3. Data Control Language:
- used to control priviledge in database.
- GRANT, REVOKE

4. Transaction Control Language
- manage transactions in the database.
- used to tune the changes made by the DML Statement.
- COMMIT, ROLLBACK, SAVEPOINT.

DDL and DML are not separate languages, instead they are the parts of a single database language such as widely SQL.

# Database Users

1. Naiva Users
- unsophisticated users
- interact with the databasee

2. Application programmers
- they are the computer professionals who write the application programs

3. Sophisticated Users
- Writes SQL Queries, without writing application programs.

4. Specialized Users:
- write specialized database application that do not fit into the traditional data processing framework.

# Database Administrators
- DBA is a person or groyp that is responsible for supervising both the databse and the use of the DBMS.
- DBAs Tasks
    - Schema definition
    - Storage Structure and access method definition.
    - Specifying integrity constraints.
    - Granting user authority to access database.
    Backing up and restoring database.

# Transaction Management
- What if system fails?
- What is more than one user is concurrently updating the same data.

- A transaction is a collection of operation that performs a single logical function in a database system.
- Each transaction is a unit of both atomicity and consistency. Thus we require that transaction do not voilate any database consistency constrains.

Management:
- Transaction-management conponent - ensures that the database remains consistent state despite system failures and transaction failures.
- Concurrency control manager - controls the interaction among the concurrent transaction.

## ACID - Atomicity, Consistency, Isolation, Durability.

ACID properties in DBMS:

Atomicity - The entire transaction takes place at once or doesnt happen at actually

Consistency - The database must be consistent before and after the transaciton.

Isolation: Multiple transaction occur independently without interference.

Durability:  The chages of a successful transaction occurs even if the system failure occurs.

# Storage Management
- It provides the interface between the low level data stored in the database and the application programs and queries submitted to the system.
- interacts with os file manager
- efficient storing, retriving and updating of data
- storage access
- file organization
- indexing and hashing

# Database System Structure

- The users issues a queries.
- The query Processor processes the queries or programes with the help of components.
- The storage manager access the stored data from the disk.
- DBMS returns the result to the users.

## Query Processor 
- Simplity and facilitate access to data
- executes the query successfully.
- Interprets the requests received from the user.
Components:

1. DDL interpreter
    - interprets the DDL statements
2. DML Compiler
    - It reanslates the DML Statements, so that they can be executed.
3. Embedded DML Pre Compiler
    - Processes the DML stamtements embedded in an application program into procedural calls
4. Query Evaluation Engine
5. Storage manager
    - provides interface between data stored and query received.
    - translates DML statements into low level file system commands.
    - it is responsible for updating storing, deleting and retriving data in the database.

    Compoennts:
        1. Authorization Manager and Integrity Manager
        2. Transaction Mnager
        3. File Manager
        4. Buffer Manager.
6. Disk Storage


# DBMS Architecture

## Client Server Architecture
- Client request the server for service
- Server provides the service.

# 1 Tier Architecture
- Client, Server and database on same pc.
- User can directly sit on the DBMS and uses it.
- Single user concept.
- Changes directly done in database itself.
- no need for network connection.
- rarely used.
- 1 tier architecture is used were:

# 2-Tier Architecture
- 2 layers: Client and Server
- Client has APIS like ODBC and JDBC to call the DBMS.
- User Interfaces and Application Programs are run on the client Side
- Database systems is stored in server machine.
- Used in organisization with multiple clients.
- direct and faster communication
- maintainance and understanding is easier.
- compatible with existing system
- poor scalability
- less secure.

# 3-Tier Architecture
- Used for web based apps
- 3 layers: Client, application server, database system.
- Enhanced scalability
- data integrity
- security
- increased complexity

# ER Model

- Entity is a thing or object.
- Entity Set is a collection of similar types of entities that share some attributes.
- An entitiy is represented by a set of attributes
- Schema is entity type
- Attribute Types
    - Simple and composite
    - single valued and multi valued
    - stored and derived attributes
- A relationship is an association among entities
- A set of similar types is called relationship set.


## Attributes Types
- Attributes is used to describe proterty of an entity.
1. Simple Attributes

2. Composite Attributes
    - made of more than one simple attribute.
3. Single Valued attribute
    - contains single value
4. Multivalued Attributes
    - represented by double ellipse
5. Stored Attributes
    - physically stored in database
6. Derived Attributes
    - do not exist in the physical database.
    - Ex: Age from DOB, Average Salary
    - represented by dashed ellipse.
7. Key Attribute
    - Uniquely intifies each entitiy.
    - represented by primary key
    - Oval with underline.

## Mapping Cardinalities
- Cardinality defines the number of entities of an entity set participates in a relationship set.
- one to one
- one to many 
- many to one
- many to many

