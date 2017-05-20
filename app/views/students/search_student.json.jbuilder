json.array!(@students) do |result|
  json.id result.id
  json.value result.name
end
