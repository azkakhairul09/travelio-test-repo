package co.id.traveliotest.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@org.springframework.stereotype.Service
public class WishlistService {

    @Autowired
    WishlistRepository repository;

    public WishlistResponse saveWishlist(String request) {
        WishlistResponse response = new WishlistResponse();
        try {
            WishlistEntity wishlistEntity = new WishlistEntity();

            wishlistEntity.setBookUid(request);

            WishlistEntity saved = repository.save(wishlistEntity);

            response.setCode(HttpStatus.OK.value());
            response.setStatus("success");
            response.setBookUid(saved.getBookUid());

            return response;
        } catch (Exception e) {
            response.setCode(HttpStatus.BAD_REQUEST.value());
            response.setStatus("failed");
            response.setBookUid(null);

            return response;
        }
    }

    public WishlistResponse getWishlistById(String parameter) {
        WishlistResponse response = new WishlistResponse();
        try {
            Optional<WishlistEntity> wishlistEntity = repository.findByBookUid(parameter);

            response.setCode(HttpStatus.OK.value());
            response.setStatus("success");
            response.setBookUid(wishlistEntity.get().getBookUid());

            return response;
        } catch (Exception e) {
            response.setCode(HttpStatus.NOT_FOUND.value());
            response.setStatus("failed");
            response.setBookUid(null);

            return response;
        }
    }
}
