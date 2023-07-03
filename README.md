<div align='center'>

## Lost And Found WebApp

<img src='https://github.com/upes-open/Git-WorkShop/assets/101355193/b9315c8e-5aaa-438e-ab5a-48b25571dc90' width=100>

![Static Badge](https://img.shields.io/badge/Discord-202020?logo=discord&logoColor=%235865F2&link=http%3A%2F%2Fdiscord.gg%2F2rnWsvkX) ![Static Badge](https://img.shields.io/badge/Twitter-202020?logo=twitter&logoColor=%231DA1F2&link=https%3A%2F%2Ftwitter.com%2FUpesOpen) ![Static Badge](https://img.shields.io/badge/Instagram-202020?logo=instagram&logoColor=%23E4405F&link=https%3A%2F%2Fwww.instagram.com%2Fupesopen_%2F)



![GitHub contributors](https://img.shields.io/github/contributors/upes-open/OSoC_Lost-And-Found-WebApp) ![GitHub forks](https://img.shields.io/github/forks/upes-open/OSoC_Lost-And-Found-WebApp) ![GitHub Repo stars](https://img.shields.io/github/stars/upes-open/OSoC_Lost-And-Found-WebApp) ![GitHub issues](https://img.shields.io/github/issues/upes-open/OSoC_Lost-And-Found-WebApp)


<!---contributor banner: https://shields.io/badges/git-hub-contributors
fork banner: https://shields.io/badges/git-hub-forks
star banner: https://shields.io/badges/git-hub-repo-stars
issues banner: https://shields.io/badges/git-hub-issues--->

</div>

### About the Project
It is noticed that whenever we lose something on campus, we have to run to the Lost and Found department and look for it there, and at times the item reaches there after we have already visited it once. Hence, a web app would be helpful to provide information about this. It will be simple and elegantly designed. There will be a login page, and then there will be two options to choose from: find a lost item or report an item that is found and belongs to someone else. Then there will be multiple options to choose from, including basic items such as ID Cards, Mobile Phones, wallets, ATM cards, notebooks, and others. If someone has to report a found item, they can either select identifiable or anonymous, and they can also provide their contact information if they want the owner to contact them, or else they can submit it to the lost and found department and tell the owner to claim it from there. The owner can prove their identity and claim the item.  
> The web app will be built using React JS and MongoDB as a database. The final app will be containerized using Docker and deployed on AWS EC2.

Let's get a walkthrough of how the completed project is supposed to work.
> Starting with the login page, user will enter details (college mail ID) and their details will be validated. From the login page there will be 3 options:
> * Report Lost Item- Its main function will be to get item details (image is not mandatory here) and store it in the Lost Items DB. Each item will be specified under the category in which it lies. See the category details below. Once the user has successfully entered the item details, there will be an option to see related items in the item gallery.
> * Report Found Item- Its main function will be to get item details (IMAGE IS MANDATORY HERE) and store it in the Found Items DB. Each item will be specified under the category it lies. See the category details below. There will be 2 options for claiming that item, the user can either provide its contact number/ mail address and ask the owner to collect the item from him/her, or they can select Collect from Lost And Found Department and go and give it to them. 
> * Items Gallery- First user will get a select category button. Then it will show all the items found lately or over a period of time. These items have not been claimed yet. It will fetch data from the Found Items DB. Each item will have the option to be claimed. Once user selects an item and clicks on ' claim now ' , then the user will be directed to 'Details Page'. Here we will get the user details including: Name, SAP ID, Branch, Year, Contact Number, Date of claiming. This record will be stored in Collected Items DB and the item will be removed from Found Items DB. Finally the user will proceed to claim the item either by visiting the Lost And Found Department or from the reporting user (as specified by the reporter).

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

### Tech Stack

![Static Badge](https://img.shields.io/badge/NodeJS-101010?logo=nodedotjs&logoColor=%23339933) ![Static Badge](https://img.shields.io/badge/MongoDB-101010?logo=mongodb&logoColor=%2347A248) ![Static Badge](https://img.shields.io/badge/ReactJS-101010?logo=react&logoColor=%2361DAFB) ![Static Badge](https://img.shields.io/badge/Docker-101010?logo=docker&logoColor=%232496ED) ![Static Badge](https://img.shields.io/badge/Firebase-101010?logo=firebase&logoColor=%23FFCA28) ![Static Badge](https://img.shields.io/badge/Amazon%20S3-101010?logo=amazons3&logoColor=%23569A31)


### Contributing


* Fork and Star the project.

* Clone the repo on your local machine.

```bash
git clone https://github.com/upes-open/OSoC-Lost-And-Found-WebApp
```

* Create a new branch `<Your_GitHub_username>`

```bash
git checkout -b <GitHub_usename>
```

* Go to the issues tab and comment on a suitable issue of your choice and wait for the issue to be assigned to you.

* Make the changes in your local repo and push the changes.
* Create a pull request to the main branch.
* Wait for the PR to be reviewed and merged.


## Happy Contributing !
