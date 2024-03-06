# OLA1_-DB
Our frontend is displayed with HTML and JS.
To view the content of the database in the frontend, the backend (Node.js) must be runned.
The command for running the backend is "node server.mjs". (Must be runned inside frontend_v2 folder)

To setup the database with Docker, this command needs to be runned. "docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=StrPass2222123" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest"

Thereafter, you must create the database "ola1_db" and download the ODBC driver SQL (https://learn.microsoft.com/en-us/sql/connect/python/pyodbc/step-1-configure-development-environment-for-pyodbc-python-development?view=sql-server-ver16&tabs=windows#install-the-odbc-driver). 



After these procedures are done, you can run the entire notebook to persist the relevant data for the frontend. 