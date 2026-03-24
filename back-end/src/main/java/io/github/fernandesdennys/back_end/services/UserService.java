package io.github.fernandesdennys.back_end.services;

import io.github.fernandesdennys.back_end.dto.UserDTO;
import io.github.fernandesdennys.back_end.entities.User;
import io.github.fernandesdennys.back_end.exceptions.ResourceNotFoundException;
import io.github.fernandesdennys.back_end.repositories.RoleRepository;
import io.github.fernandesdennys.back_end.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Transactional(readOnly = true)
    public UserDTO findById(Long id) {
        User entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "User not found. Id: " + id));
        return new UserDTO(entity);
    }
}
