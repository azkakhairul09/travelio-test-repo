package co.id.traveliotest.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class WishlistController {

    @Autowired
    WishlistService service;

    @PostMapping("/wishlist/{request}")
    public WishlistResponse addWishlist(@PathVariable String request) {

        WishlistResponse response = service.saveWishlist(request);

        return response;
    }

    @GetMapping("/wishlist/{request}")
    public WishlistResponse getWishlist(@PathVariable String request) {
        WishlistResponse response = service.getWishlistById(request);

        return response;
    }

}
