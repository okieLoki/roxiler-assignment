## API REFERENCE

The service is deployed on Render at https://roxiler-assignment.onrender.com

1. Add Data API:
   - URL: `/api/addData`
   - Method: POST
   - Description: Retrieves data from the external API and adds it to the database.
   - Response:
     - Status: 200 OK
     - Body: `{ "message": "Data added successfully" }`
   - Error:
     - Status: 500 Internal Server Error
     - Body: `{ "message": "Error fetching data from API" }`

2. Get Data by Month API:
   - URL: `/api/getData?month={month}`
   - Method: GET
   - Description: Retrieves products data from the database based on the specified month.
   - Parameters:
     - `month` (required): The month for which to retrieve the data. 
   - Response:
     - Status: 200 OK
     - Body: Array of products data
   - Error:
     - Status: 500 Internal Server Error
     - Body: `{ "message": "Error fetching data from API" }`

3. Get Monthly Sales API:
   - URL: `/api/getStats/sale?month={month}`
   - Method: GET
   - Description: Retrieves sales statistics for the specified month.
   - Parameters:
     - `month` (required): The month for which to retrieve the statistics. 
   - Response:
     - Status: 200 OK
     - Body: Sales statistics for the specified month
   - Error:
     - Status: 500 Internal Server Error
     - Body: `{ "message": "Error fetching data from API" }`

4. Get Bar Chart Data API:
   - URL: `/api/getStats/barchart?month={month}`
   - Method: GET
   - Description: Retrieves data for generating a bar chart for the specified month.
   - Parameters:
     - `month` (required): The month for which to retrieve the data. 
   - Response:
     - Status: 200 OK
     - Body: Data for generating a bar chart for the specified month
   - Error:
     - Status: 500 Internal Server Error
     - Body: `{ "message": "Error fetching data from API" }`

5. Get Pie Chart Data API:
   - URL: `/api/getStats/piechart?month={month}`
   - Method: GET
   - Description: Retrieves data for generating a pie chart for the specified month.
   - Parameters:
     - `month` (required): The month for which to retrieve the data. 
   - Response:
     - Status: 200 OK
     - Body: Data for generating a pie chart for the specified month
   - Error:
     - Status: 500 Internal Server Error
     - Body: `{ "message": "Error fetching data from API" }`

6. Get Combined data for sales, Bar Graph and Pie Chart
    - URL: `api/getCombinedStats?month={month}`
    - Parameters:
        - `month` (required): The month for which to retrieve the data. 
    - Response:
        - Status: 200 OK
        - Body: Data containing sales, bar graph and pie chart data for the specified month
    - Error:
        - Status: 500 Internal Server Error
        - Body: `{ "message": "Error fetching data from API" }`

Note: Replace `{month}` in the URLs with the desired month value, e.g., `january`, `february`, etc. 