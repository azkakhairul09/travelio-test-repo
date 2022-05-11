package co.id.traveliotest.favorite;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<FavoriteEntity, String> {
    Optional<FavoriteEntity> findByBookUid(String id);
}
