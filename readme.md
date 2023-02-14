## How to Start the server:

Navigate to the root directory and run `npm install`

Once the installation is complete, run `npm start`

You should see 'Server listening on port 3010...' in your terminal.



## How to request data:

By default, the server will be listening on http://localhost:3010

Requests are made by sending an HTTP GET request to the appropriate URL. Let's look at an example below.

The following URL will request data regarding new COVID-19 cases for California, for the last 16 weeks.

http://localhost:3010/cases/CA

The format to request new COVID-19 cases is: http://localhost:3010/cases/{state} 
The format to request new COVID-19 deaths is: http://localhost:3010/deaths/{state} 
{state} is simply a stand in for the state's abbreviation.

Here's an example to request the weekly amount of COVID-19 deaths in Oregon, for the last 16 weeks:

http://localhost:3010/deaths/OR




## How to receive data

The data is returned via an HTTP response containing a list of 16 objects. Each object in the list represents one week's data. The list is sorted so the most recent data is the first object, and each next object contains data for the prior week.  

By default 16 weeks of data is returned; if requested, more or less data can be returned. 

The "date_updated" key, contains a string representing the date this data was updated. The date updated, is the day after the week that it is reporting on. If the "date_updated is "2023-02-09", it is reporting the values from "2023-02-02" up to and including "2023-02-08". 

To demonstrate, the first example above would return the following list:


```
[
  {
    "date_updated": "2023-02-09",
    "new_cases": "27118.0"
  },
  {
    "date_updated": "2023-02-02",
    "new_cases": "25331.0"
  },
  {
    "date_updated": "2023-01-26",
    "new_cases": "25098.0"
  },
  {
    "date_updated": "2023-01-19",
    "new_cases": "30898.0"
  },
  {
    "date_updated": "2023-01-12",
    "new_cases": "44537.0"
  },
  {
    "date_updated": "2023-01-05",
    "new_cases": "57501.0"
  },
  {
    "date_updated": "2022-12-29",
    "new_cases": "55676.0"
  },
  {
    "date_updated": "2022-12-22",
    "new_cases": "87540.0"
  },
  {
    "date_updated": "2022-12-15",
    "new_cases": "67702.0"
  },
  {
    "date_updated": "2022-12-08",
    "new_cases": "80545.0"
  },
  {
    "date_updated": "2022-12-01",
    "new_cases": "44269.0"
  },
  {
    "date_updated": "2022-11-24",
    "new_cases": "41278.0"
  },
  {
    "date_updated": "2022-11-17",
    "new_cases": "34288.0"
  },
  {
    "date_updated": "2022-11-10",
    "new_cases": "25737.0"
  },
  {
    "date_updated": "2022-11-03",
    "new_cases": "22459.0"
  },
  {
    "date_updated": "2022-10-27",
    "new_cases": "24127.0"
  }
]
```


## UML Sequence Diagram

![UML Sequence Diagram](/A8%20UML%20Diagram.PNG)