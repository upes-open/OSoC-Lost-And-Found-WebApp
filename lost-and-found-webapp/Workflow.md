Let's get a walkthrough of how the completed project is supposed to work.
> Starting with the login page, user will enter details (college mail ID) and their details will be validated. From the login page there will be 3 options:
> * Report Lost Item- Its main function will be to get item details (image is not mandatory here) and store it in the Lost Items DB. Each item will be specified under the category in which it lies. See the category details below. Once the user has successfully entered the item details, there will be an option to see related items in the item gallery.
> * Report Found Item- Its main function will be to get item details (IMAGE IS MANDATORY HERE) and store it in the Found Items DB. Each item will be specified under the category it lies. See the category details below. There will be 2 options for claiming that item, the user can either provide its contact number/ mail address and ask the owner to collect the item from him/her, or they can select Collect from Lost And Found Department and go and give it to them. 
> * Items Gallery- First user will get a select category button. Then it will show all the items found lately or over a period of time. These items have not been claimed yet. It will fetch data from the Found Items DB. Each item will have the option to be claimed. Once user selects an item and clicks on 'CLAIM NOW' , then the user will be directed to 'Details Page'. Here we will get the user details including: Name, SAP ID, Branch, Year, Contact Number, Date of claiming. This record will be stored in Collected Items DB and the item will be removed from Found Items DB. Finally the user will proceed to claim the item either by visiting the Lost And Found Department or from the reporting user (as specified by the reporter).
> * ✨New Feature✨ Help Us Find- This page will fetch data from the Lost Items DB and will display what all items are lost and if users see such item anywhere they can report it in the Found Item section. Each item will have a button name 'REPORT AS FOUND'.

Category of items
> Each item will have a specific category from the list below:
> * Cards-
>   * College ID Card
>   * ATM Card
>   * Driver's License
>   * Aadhar Card
>   * Any other card
> * Electronic Devices-
>   * Mobile Phones
>   * Laptop
>   * Smart Watch
>   * Charger
>   * Any other electronic device
> * Books-
>   * Notebooks/ Registers
>   * Book
>   * Novel
>   * Any other book
> * Others-
>   * Bottles
>   * Wallets
>   * Bags
>   * Any other item
