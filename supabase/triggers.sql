create function update_deal_status() returns trigger as \$\$
begin
  if new.status = 'closed' then
    update deals set status='closed' where property_id=new.id;
  end if;
  return new;
end;
\$\$ language plpgsql;

create trigger trigger_update_deal
after update on properties
for each row
execute procedure update_deal_status();
