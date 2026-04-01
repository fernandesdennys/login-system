package io.github.fernandesdennys.back_end.config.customgrant;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2AuthorizationGrantAuthenticationToken;

import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class CustomPasswordAuthenticationToken extends OAuth2AuthorizationGrantAuthenticationToken {
	
	private  String username;
	private  String password;
	private final Set<String> scopes;
	
	public CustomPasswordAuthenticationToken(Authentication clientPrincipal,
			 Set<String> scopes, Map<String, Object> additionalParameters) {
		
		super(new AuthorizationGrantType("password"), clientPrincipal, additionalParameters);
		
		this.username = (String) additionalParameters.get("username");
		this.password = (String) additionalParameters.get("password");
		this.scopes = Collections.unmodifiableSet(
				scopes != null ? new HashSet<>(scopes) : Collections.emptySet());
	}

	public String getUsername() {
		return this.username;
	}
	
	public String getPassword() {
		return this.password;
	}

	public Set<String> getScopes() {
		return this.scopes;
	}
}
