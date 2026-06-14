FROM httpd:alpine

# Enable mod_rewrite and AllowOverride All
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's/AllowOverride None/AllowOverride All/g' /usr/local/apache2/conf/httpd.conf

# Copy everything from current directory to htdocs
COPY ./ /usr/local/apache2/htdocs/
