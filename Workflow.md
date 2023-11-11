
**Let's get a walkthrough of how the completed project is supposed to work.**

 Starting with the login page, user will enter details (college mail ID) and their details will be validated. From the login page there will be 3 options:

 * **Report Lost Item**-The user enters details about a lost item and selects its category. Uploading an image is optional. The information is added to the Lost Items database.
   The user must provide their name and contact number. An item gallery shows other recently lost items in that category.
   ![Lost item](https://user-images.githubusercontent.com/103314396/271847280-dc9533cd-d163-4fc1-889d-cb8ec5d3b5aa.png)

   ---
   
 * **Report Found Item**- The user enters details about a found item. Uploading an image is mandatory. The data is added to the Found Items database.The finder can choose to leave their 
     contact information.The item must be submitted to the college's Lost and Found department.
   ![Found Item](https://user-images.githubusercontent.com/103314396/271847270-c724a303-8e1b-4722-8e4c-47c22d71707b.png)

   ---
   
 * **Items Gallery**- First user will get a select category button.
  ![Items Gallery](https://user-images.githubusercontent.com/103314396/271847312-43834d7a-6103-46fc-bb8d-001eafeff1d2.png)

    Then it will show all the items found lately or over a period of time. These items have not been claimed yet. It will fetch data from the Found Items DB. Each item will have the option to be claimed. Once user selects an item and clicks on 'CLAIM NOW' , then the user will be directed to 'Details Page'. Here we will get the user details including: Name, SAP ID, Branch, Year, Contact Number, Date of claiming. This record will be stored in Collected Items DB and the item will be removed from Found Items DB. Finally the user will proceed to claim the item by visiting the Lost And Found Department.


 ![Items gallery1](https://user-images.githubusercontent.com/103314396/271847355-cba7d76c-b041-41fa-ae00-227ccfc027cf.png)
 
 *Category of items*

 Each item will have a specific category from the list below:
 * Cards-
   * College ID Card
   * ATM Card
   * Driver's License
   * Aadhar Card
   * Any other card
 * Electronic Devices-
   * Mobile Phones
   * Laptop
   * Smart Watch
   * Charger
   * Any other electronic device
 * Books-
   * Notebooks/ Registers
   * Book
   * Novel
   * Any other book
 * Others-
   * Bottles
   * Wallets
   * Bags
   * Any other item

 
    
    ---
    
 * **✨New Feature**-✨ Help Us Find- This page will fetch data from the Lost Items DB and will display what all items are lost and if users see such item anywhere they can report it in the Found Item section. Each item will have a button name 'REPORT AS FOUND'.
   
   ![alt text](https://user-images.githubusercontent.com/103314396/271847394-e5bd29fe-6c10-4219-8bd8-10b14645bf73.png)
   
![image](https://github.com/upes-open/OSoC-Lost-And-Found-WebApp/assets/103314396/fdc50b0b-dd13-4c53-89bd-2336c79ff48c)

