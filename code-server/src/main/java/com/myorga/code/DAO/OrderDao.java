package com.myorga.code.DAO;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class OrderDao implements InitializingBean {

    @Autowired
    private SessionFactory sessionFactory;

    public OrderDao() {
// (readOnly = true, propagation= Propagation.NOT_SUPPORTED)
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        Session session;

        try {
            session = sessionFactory.getCurrentSession();
        } catch (HibernateException e) {
            session = sessionFactory.openSession();
        }
    }
}
