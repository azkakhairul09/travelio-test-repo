package co.id.traveliotest.wishlist;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WishlistRepository extends JpaRepository<WishlistEntity, String> {
    Optional<WishlistEntity> findByBookUid(String id);
}
