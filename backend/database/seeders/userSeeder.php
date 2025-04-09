<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            'ABAAKIL AYOUB',
            'ABOUTALEB FATIMA ZAHRA',
            'AMLAL GHIZLANE',
            'BENHIBA GHASSAN',
            'BIZGUERN SOUFIAN',
            'BOUGUERNE AYOUB',
            'CHAIB OMAR',
            'EL MOUSSAOUI MOUAD',
            'ELBOUBAKRI SIHAM',
            'ELHAISSAN MOHAMED',
            'ID ATTALEB MOHAMED',
            'ID YOUSSEF ZAINA',
            'JBARA EL MOKHTAR',
            'LABROUDI MARIAM',
            'LAFDAOUI HAJAR',
            'MABDOUL MOHAMMED',
            'MIGUADERN ASMA',
            'MOUMNI ABDELMAJID',
            'OUABDERRAZAK ISMAIL',
            'OUCHEIKH IMANE',
            'OUZED MHAMED',
            'SARKIK MERYEM',
        ];
        foreach ($users as $user) {
           DB::table('users')->insert([
                'name' => $user,
                'email' => strtolower(str_replace(' ', '_', $user)) . '@example.com',
                'password' => Hash::make('123456789'), // Use a secure password hashing method
                'isOnline' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
