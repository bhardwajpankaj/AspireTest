# Aspire

### Aspire App logo

![Logo](https://user-images.githubusercontent.com/5277297/158010252-4e37f02e-b608-4b60-9e86-e1a74c287efd.png)


## Helps users to handle Debit card and their spending limit

## Story
Aspire works in managing Credit/Debit cards for the customers. Aspire wants a React-Native Application which can help their customers to handle their cashflows and provide an easy way to lookup there spending limit, whether they are exceding any limit by providing weekly tragets of spendings.
As per provided doc features of this app are:
Tab based application
Second Tab that has Debit Card screen
  and another detail screen where user can set weekly spending limits 

API user here only 1 which has user Card details via JsonKeeper (https://jsonkeeper.com/b/WQMR). Other than this I have used data from app itself. If need to expand this project we can do easily with created get and post based functions for API requests.

## Running the App

This is an expo managed project.
3. On your terminal go to a folder where you would like to test this project. Execute the following command to initialize a blank repo.
```sh
git init
```
4. Then clone this repository in your initialized repo.
```sh
git clone the project
```
5. Now run the following commands to set up Node Modules required for the project.
```
npm install
```
6. Start the expo server by typing
```
expo start
```
- This wll start the metro bundler service. 
- Now, to test on `emulator` & `simulator` do below changes for each environment

--- `Android`(https://docs.expo.dev/workflow/android-studio-emulator/)
--- `iOS`(https://docs.expo.dev/workflow/ios-simulator/) 


## Android Screenshot -
![Screenshot_1647074545](https://user-images.githubusercontent.com/5277297/158010967-7846209e-aff2-48b2-9758-f819bd329ce0.png)


## iOS Screenshot - 
![Simulator Screen Shot - iPhone 11 - 2022-03-12 at 13 19 02](https://user-images.githubusercontent.com/5277297/158010186-b2a3a0db-a889-438b-8f65-3b21ad7a3dee.png)
![Simulator Screen Shot - iPhone 11 - 2022-03-12 at 13 18 58](https://user-images.githubusercontent.com/5277297/158010202-54262c7f-1515-4366-ac34-6a120026bbf8.png)


## APIs Used
-- https://jsonkeeper.com/b/WQMR

-- Architure written using REDUX
- Constants folder that has color and string constants
- components folder that has helper components
- Networking for request handling
- store for store and reducer
- screens folder that has all the screens and views
