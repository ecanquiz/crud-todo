# Migración, Fábrica y Sembradora

## Migración

Empezaremos creando la estructura de la tabla `tasks`. Ubique el archivo que generamos, al final del paso anterior y complételo con el código resaltado. 

📃`./database/migrations/###_##_##_######_create_tasks_table.php`
```php{16,17,18,19}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title', 50);
            $table->text('description');
            $table->boolean('done')->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');       
    }
};
```

## Fábrica

Aprovechemos las fábricas de Laravel para rellenar la sembradora. Complételo con el código resaltado. 

📃`./database/factories/TaskFactory.php`
```php{20,21,22}
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->unique()->text(25),
            'description' => fake()->text(50),
            'done' => fake()->boolean(),
        ];        
    }
}
```

## Sembradora

Notifiquemos que queremos sembrar las tareas. Agregue el código resaltado.

📃`./database/seeders/DatabaseSeeder.php`
```php{22,23,24}
<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        
        $this->call([
            TaskSeeder::class,
        ]);
    }
}
```

Ahora actualizaremos nuestro archivo sembrador para que cree 3 registros.

📃`./database/seeders/TaskSeeder.php`
```php{15}
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Task::factory(3)->create();
    }
}
```

## Ejecutar las migraciones

Ha llegado el momento de ejecutar las migraciones por la terminal.

```sh
php artisan migrate:fresh --seed
```

Ya creamos una tabla llamada `tasks` con algunos registro de prueba.
