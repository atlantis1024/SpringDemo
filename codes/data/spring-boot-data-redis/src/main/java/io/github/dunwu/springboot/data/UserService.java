package io.github.dunwu.springboot.data;

/**
 * @author <a href="mailto:forbreak@163.com">Zhang Peng</a>
 * @since 2019-10-14
 */
public interface UserService {

    User getUser(Long id);

    void setUser(User user);

}
