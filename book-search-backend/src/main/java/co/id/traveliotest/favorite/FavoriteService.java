package co.id.traveliotest.favorite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@org.springframework.stereotype.Service
public class FavoriteService {

    @Autowired
    FavoriteRepository repository;

    public FavoriteResponse saveFavorite(String request) {
        FavoriteResponse response = new FavoriteResponse();
        try {
            FavoriteEntity favoriteEntity = new FavoriteEntity();

            favoriteEntity.setBookUid(request);

            FavoriteEntity saved = repository.save(favoriteEntity);

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

    public FavoriteResponse getFavoriteById(String parameter) {
        FavoriteResponse response = new FavoriteResponse();
        try {
            Optional<FavoriteEntity> favoriteEntity = repository.findByBookUid(parameter);

            response.setCode(HttpStatus.OK.value());
            response.setStatus("success");
            response.setBookUid(favoriteEntity.get().getBookUid());

            return response;
        } catch (Exception e) {
            response.setCode(HttpStatus.NOT_FOUND.value());
            response.setStatus("failed");
            response.setBookUid(null);

            return response;
        }
    }
}
