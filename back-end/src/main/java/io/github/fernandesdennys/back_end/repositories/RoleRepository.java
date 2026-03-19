package io.github.fernandesdennys.back_end.repositories;

import io.github.fernandesdennys.back_end.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
