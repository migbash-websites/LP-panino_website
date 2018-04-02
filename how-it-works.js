function Business_Page() {
    if (document.getElementById("business-faq").style.display === "none") {
        document.getElementById("customer-video").style.display = "none";
        document.getElementById("customer-faq").style.display = "none";
        document.getElementById("business-video").style.display = "none";
        document.getElementById("business-faq").style.display = "block";
    }
}

function Customer_Page() {
    if (document.getElementById("customer-faq").style.display === "none") {
        document.getElementById("business-faq").style.display = "none";
        document.getElementById("business-video").style.display = "none";
        document.getElementById("customer-video").style.display = "block";
        document.getElementById("customer-faq").style.display = "block";
    }
}
