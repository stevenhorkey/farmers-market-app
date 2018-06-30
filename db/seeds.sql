



INSERT INTO Users
    (firstName, lastName, email, password, userType, profileImage, bio)
VALUES
    ("Dough", "Vinci", "leonardo@data.com", "pass", "vendor", "https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg", "First in carbs, last in flight." ),
    ("Sas", "Squash", "bigFEET@hairyBalls.com", "vendor", "sasquatch.jpg", "I enjoy long walks in the forest. Also hide and seek.");


INSERT INTO Markets
    (marketName, marketAddress, marketZip, marketTime, marketImage)
VALUES
    ("St. Philips Plaza", "Campbell and River", "Saturdays from 8:00AM-2:00PM", null),
    ("Thyme Market", "University Blvd", "Sundays from 8:00AM-1:00PM", null);


INSERT INTO Products
    (item, price, image)
VALUES
    ("Bananas by the eaches", "$.59", "banana.jpg"),
    ("carrot", "1 shilling", "carrot.jpg");