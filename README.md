# review-it

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Get Tripadvisor review link

- Go to restaurant's Tripadvisor page
- Replace `Restaurant_Review` by `Restaurant_Review` on URL

### Get Google review link

- Go to `https://developers.google.com/places/place-id`
- Search for the restaurant
- Copy the restaurant id
- Concatenate the id at the end of `https://search.google.com/local/writereview?placeid=`

### Generate QR Code from URL

```
http://goqr.me/#t=url
```

### Update datas

- Airtable > Base `Trip.it` > Table `Stores`



### Demo

- [bit.ly/namaste-rouen](https://bit.ly/namaste-rouen)
- [bit.ly/namaste-rosny2](https://bit.ly/namaste-rosny2)
