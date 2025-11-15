CREATE OR REPLACE FUNCTION handle_new_property()
RETURNS trigger AS \$\$
BEGIN
  PERFORM start_ai_seller_outreach(NEW.id);
  RETURN NEW;
END;
\$\$ LANGUAGE plpgsql;

CREATE TRIGGER new_property_trigger
AFTER INSERT ON properties
FOR EACH ROW EXECUTE FUNCTION handle_new_property();
