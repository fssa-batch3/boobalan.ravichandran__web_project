[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_boobalan.ravichandran__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_boobalan.ravichandran__web_project)
# Fert Agro Boomi

This project is about Fertilizers,Fungicides,Growth Promoters buying website. The following are my wireframe, problem statement, userflow.
* Wireframe link: https://drive.google.com/drive/u/0/folders/1GmGFyJsOcinWxKe0CQtdE-LAJ83ncgCG

* Problem statement: https://drive.google.com/drive/u/0/folders/1GmGFyJsOcinWxKe0CQtdE-LAJ83ncgCG

* Userflow: https://drive.google.com/drive/u/0/folders/1GmGFyJsOcinWxKe0CQtdE-LAJ83ncgCG


## List of features:

### User CRUD[Completed]
* User sign up.
* User login.
* User edit data in profile page.
* User delete account.

### Product CRUD[Completed]
* Product Create.
* product showing.
* Edit product details.
* Delete product.

### Order[Completed]
* Create Order.
* Read Order.
* Delete order.

### Wishlist[Completed]
* Wishlist Create.
* Wishlist Read.
* Delete Wishlist.

### Add to cart[Completed]
* Add to cart Create.
* Add to cart Read.
* Add to cart Update.
* Add to cart Delete.


## Buyer

### Login page[Completed]
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as mobile number, and password.
        3. Click the "login" button.
        4. User does not have an account, click "Create an account".
    - Expected Result:
        - The user is redirected to the Create Your Account page.
        - User click on "Login" button and user will be redirected to home page

### Register page[Completed]
- Scenario 1: Successfully login in to account
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as mobile number, email, full name and password.
        3. Click the "Register" button.
    - Expected Result:
        - The user is redirected to the login page.


### View products/items[Completed]
- Scenario 1: Successfully view products/items
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. View the list of available products/items.
    - Expected Result:
        - The user can view the list of available products/items.

### View product/item details[Completed]
- Scenario 1: Successfully view product/item details
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to view its details.
    - Expected Result:
        - The user can view the details of the selected product/item.

### Buy a product/item[Completed]
- Scenario 1: Successfully purchase a product/item
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to view its details.
        4. Click the "BUY NOW" button.
        5. The user is redirected to the order summary page then user click "Continue" button.
        5. The user is Confirm the shipping address.
        6. Click the "Save & Deliver here" button.
    - Expected Result:
        - The user is redirected to the "Thank you for your order" page.

### Add product/item to cart[Completed]
- Scenario 1: Successfully add product/item to cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to add to cart.
        4. Click the "GO TO CART" button.
    - Expected Result:
        - The product/item is added to the user's cart.

### View items in cart[Completed]
- Scenario 1: Successfully view items in cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. View the list of items in the cart.
    - Expected Result:
        - The user can view the list of items in the cart.

### Remove item from cart[Completed]
- Scenario 1: Successfully remove item from cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Remove the selected item from the cart.
    - Expected Result:
        - The item is removed from the user's cart.


### Add product/item to wishlist[Completed]
- Scenario 1: Successfully add product/item to wishlist
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to wishlist.
        4. Click the "heart" icon.
    - Expected Result:
        - The product/item is added to the user's wishlist.

### View items in wishlist[Completed]
- Scenario 1: Successfully view items in wishlist
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the wishlist page.
        3. View the list of items in the wishlist.
    - Expected Result:
        - The user can view the list of items in the wishlist.

### Remove item from wishlist[Completed]
- Scenario 1: Successfully remove item from wishlist
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the wishlist page.
        3. Remove the selected item from the wishlist.
    - Expected Result:
        - The item is removed from the user's wishlist.

### Profile Account[Completed]
- Scenario 1: Successfully created a new profile account
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the user index page.
        3. Click "Profile" Icon.
    - Expected Result:
        - The user is redirected to the Personal Information page.

### Edit Profile Account[Completed]
- Scenario 1: Successfully read data in profile account
    - Steps:
        1. Navigate to the user index page.
        2. If the user wants to edit their profile.
        3. Click "Edit" Button.
    - Expected Result:
        - The user is redirected to the Edit Personal Details Page.

### Update Profile Account[Completed]
- Scenario 1: Successfully read data in profile account
    - Steps:
        1. Navigate to the user Edit Personal Details Page.
        2. Enter the required information such as full name, gender, date of birth, Street Name, City Name, District Name and
        State Name
        3. Click "save" Button.
    - Expected Result:
        - The user is redirected to the Personal Information Page.
    
          
### Delete Profile Account
- Scenario 1: Successfully delete data in profile account.
   - Stepts: 
      1. click the "profile" icon which is at the top right of the page.
      2. Navigate to the user Profile page.
      3. Click "Delete" Button.
      4. "Are you sure you're deleting your account?" A alert message will be displayed. Click OK to delete the user account.
   - Expected Result:
      - The user is redirected to the index page.

### Logout profile
- Scenario 1: Successfully logout profile.
   - Stepts: 
      1. Each page has an "Logout" button in the top right corner.
      2. Click "logout" Button.
   - Expected Result:
      - The user is redirected to the index page.
      
 ### Delete Profile Account
- Scenario 1: Successfully delete data in profile account.
   - Stepts: 
      1. click the "profile" icon which is at the top right of the page.
      2. Navigate to the user Profile page.
      3. Click "Delete" Button.
      4. "Are you sure to delete your account?" A alert message will be displayed. Click OK to delete the user account.
   - Expected Result:
      - The user is redirected to the index page.

### Create Product
- Scenario 1: Successfully Create Product.
   - Stepts: 
      1. click the "profile" icon which is at the top right of the page.
      2. Navigate to the user Profile page.
      3. Click "Create new Product" Button is at the bottom right of the page.
      4. The user is redirected to the Add products page.
      5. Enter the required information such as Category,  Manufacturing Company Name, Product name, Image URL,  Product Actual Price, Discount on Product,  Product weight, Description, Benifits, Application.
      6. Click "Save" Button.
      7. The product will be created on the category page of whichever category you have selected. 
      8. The category is available on the header such as "BRANDS", "CROP PROTECTION", "CROP NUTRITION".
   - Expected Result:
      - The user is redirected to the home page.
      
 ### Update Product
- Scenario 1: Successfully Updated the Product details.
   - Stepts: 
      1. click the "profile" icon which is at the top right of the page.
      2. Navigate to the user Profile page.
      3. Click "Create new Product" Button is at the bottom right of the page.
      4. The user is redirected to the Add products page.
      5. At the bottom of the Add Products page is the Update Page button. 
      6. Click " Update Page" button.
      7. The user is redirected to the Update Products Page.
      8. Enter the  Product Unique ID.
      9. The Product Unique ID have to copied from localStorage which product wants to update.
      10. Then Click "Find Details" Button.
      11. Product Details filled automatically all the input field. 
      12. Enter the specific input field in the update detail for which you want to update the specific product.
      13. Then Click "Update" button.
      14. If want to cancel update the product details click "Cancel" button - the user is redirected to the Profile page.
   - Expected Result:
      - The user is redirected to the Update Product page.
      - If you want to go to the home page, click "Go to Home".
      
 ### Delete Product
- Scenario 1: Successfully Deleted the Product details.
   - Stepts: 
      1. click the "profile" icon which is at the top right of the page.
      2. Navigate to the user Profile page.
      3. Click "Create new Product" Button is at the bottom right of the page.
      4. The user is redirected to the Add products page.
      5. At the bottom of the Add Products page is the Update Page button. 
      6. Click " Update Page" button.
      7. The user is redirected to the Update Products Page.
      8. Enter the  Product Unique ID.
      9. The Product Unique ID have to copied from localStorage which product wants to update.
      10. Then Click "Find Details" Button.
      11. Product Details filled automatically all the input field.
      13. Click "Delete details" button.
      14.Are you sure you want to delete product details? A alert message will be displayed. Click OK to Delete the product details.
   - Expected Result:
      - If you want to go to the home page, click "Go to Home".