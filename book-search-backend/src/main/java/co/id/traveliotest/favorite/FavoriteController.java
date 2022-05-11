package co.id.traveliotest.favorite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class FavoriteController {

    @Autowired
    FavoriteService service;

    @PostMapping("/favorite/{request}")
    public FavoriteResponse addFavorite(@PathVariable String request) {

        FavoriteResponse response = service.saveFavorite(request);

        return response;
    }

    @GetMapping("/favorite/{request}")
    public FavoriteResponse getFavorite(@PathVariable String request) {
        FavoriteResponse response = service.getFavoriteById(request);

        return response;
    }

}
